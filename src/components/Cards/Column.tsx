import { ColumnProps } from "../@types";
import Drop from "./Drop";
import Drag from "./Drag";
import { TextField } from "@mui/material";
import { ColumnStyled } from "../../layout/styles";
import OptionsButton from "../Interface/OptionsButton";

export default function Column({ column, tasks, provided }: ColumnProps) {
  return (
    <ColumnStyled>
      <div {...provided?.dragHandleProps} className="select"></div>
      <TextField id="filled-basic" label={column.title} variant="outlined" />
      <Drop droppableId={column.id} type="TASK" className="task-drop">
        {tasks.map((task, index) => (
          <Drag
            className="drag"
            draggableId={task.id}
            index={index}
            key={task.id}
          >
            <div className="card">
              <div className="OptionsBtn">
                <TextField
                  id="filled-basic"
                  label={task.id}
                  variant="outlined"
                />
                <OptionsButton />
              </div>
              <TextField
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue={task.content}
                variant="standard"
              />
            </div>
          </Drag>
        ))}
      </Drop>
    </ColumnStyled>
  );
}
