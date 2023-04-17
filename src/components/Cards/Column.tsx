import { ColumnProps } from "../@types";
import Drop from "./Drop";
import Drag from "./Drag";
import { ColumnStyled } from "../../layout/styles";
import ColumnButton from "../Interface/ColumnButton";
import TaskButton from "../Interface/TaskButton";
import ShortTextIcon from "@mui/icons-material/ShortText";

export default function Column({ column, tasks, provided }: ColumnProps) {
  return (
    <ColumnStyled>
      <div {...provided?.dragHandleProps} className="select">
        <ShortTextIcon sx={{ fill: "#939393" }} />
      </div>
      <div className="ColumnBtn">
        <textarea
          className="columnTitle"
          placeholder="Column Title"
          defaultValue={column.title}
        ></textarea>
        <ColumnButton />
      </div>
      <Drop droppableId={column.id} type="TASK" className="task-drop">
        {tasks.map((task, index) => (
          <Drag
            className="drag"
            draggableId={task.id}
            index={index}
            key={task.id}
          >
            <div className="card">
              <div className="TaskBtn">
                <textarea
                  className="contentTitle"
                  placeholder="Task Title"
                  defaultValue={task.id}
                ></textarea>
                <TaskButton />
              </div>
              <textarea
                className="contentText"
                placeholder="Enter your notes here"
                defaultValue={task.content}
              ></textarea>
            </div>
          </Drag>
        ))}
      </Drop>
    </ColumnStyled>
  );
}
