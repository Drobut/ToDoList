import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { DropProps } from "../@types";

const Content = styled.div<{ isDraggingOver: boolean }>`
  background-color: ${(props) => (props.isDraggingOver ? "#f7f7f7" : "#fff")};
`;

export default function Drop({ children, className, ...props }: DropProps) {
  return (
    <Droppable {...props}>
      {(provided, snapshot) => (
        <Content
          {...provided.innerRef}
          ref={provided.innerRef}
          className={className}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {children}
          {provided.placeholder}
        </Content>
      )}
    </Droppable>
  );
}
