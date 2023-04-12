import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ChildProps, DragProps } from "../@types";

export default function Drag({
  className,
  children,
  dragAll = true,
  ...props
}: DragProps) {
  if (!React.isValidElement(children)) {
    return <div />;
  }

  return (
    <Draggable {...props}>
      {(provided) => {
        const dragHandleProps = dragAll ? provided.dragHandleProps : {};
        return (
          <div
            className={className}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...dragHandleProps}
          >
            {React.cloneElement(children, { provided } as ChildProps)}
          </div>
        );
      }}
    </Draggable>
  );
}
