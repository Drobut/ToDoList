import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useState } from "react";
import { initialData } from "../../components/Cards/data";
import { addTask, deleteTask, onChange } from "../../utils";
import Drop from "../../components/Cards/Drop";
import Drag from "../../components/Cards/Drag";
import Column from "../../components/Cards/Column";

export default function Cards() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (res: DropResult) => {
    const { source, destination, draggableId } = res;
    if (!destination) return;
    if (onChange(source, destination)) return;
    if (res.type === "TASK") {
      let newData = deleteTask(data, source);
      newData = addTask(newData, destination, draggableId);
      setData(newData);
    }
    if (res.type === "COLUMN") {
      let columnOrder = [...data.columnOrder];
      columnOrder.splice(source.index, 1);
      columnOrder.splice(destination.index, 0, draggableId);
      data.columnOrder = columnOrder;
      setData({ ...data });
    }
  };

  return (
    <div className="cardPage">
      <DragDropContext onDragEnd={onDragEnd}>
        <Drop
          className="column-content"
          droppableId="all-columns"
          type="COLUMN"
          direction="horizontal"
        >
          {data.columnOrder.map((columnId, index) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
            return (
              <Drag
                key={columnId}
                draggableId={columnId}
                index={index}
                dragAll={false}
              >
                <Column column={column} tasks={tasks} />
              </Drag>
            );
          })}
        </Drop>
      </DragDropContext>
    </div>
  );
}
