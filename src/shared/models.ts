export interface Todo {
  id: number;
  content: string;
}

export const DONE_VALUE = 'done';
export const UNDONE_VALUE = 'undone';
export const INDETERMINATE_VALUE = 'partial';
export type DoneStatus = typeof DONE_VALUE | typeof UNDONE_VALUE | typeof INDETERMINATE_VALUE;
export interface TodoItem {
  id: number;
  summary: string;
  description: string;
  done: DoneStatus;
  position: number;
}

export interface List {
  id: number;
  name: string;
  items: TodoItem[];
}
