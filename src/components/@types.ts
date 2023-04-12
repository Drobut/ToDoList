import { ReactNode } from "react";
import {
  DraggableProps,
  DraggableProvided,
  DroppableProps,
} from "react-beautiful-dnd";

export interface DragProps extends Omit<DraggableProps, "children"> {
  className?: string;
  children: ReactNode;
  dragAll?: boolean;
}

export interface ChildProps extends React.HTMLAttributes<HTMLElement> {
  provided: DraggableProvided;
}

export interface DropProps extends Omit<DroppableProps, "children"> {
  children: ReactNode;
  className?: string;
}

export interface ColumnProps {
  className?: string;
  column: CulumnsProps;
  tasks: TaksProps[];
  provided?: DraggableProvided;
}

export interface TaksProps {
  id: string;
  content: string;
}

export interface CulumnsProps {
  id: string;
  title: string;
  taskIds: string[];
}

export interface TasksProps {
  [key: string]: TaksProps;
}

export interface CulumnsPropss {
  [key: string]: CulumnsProps;
}

export interface Data {
  tasks: TasksProps;
  columns: CulumnsPropss;
  columnOrder: string[];
}
