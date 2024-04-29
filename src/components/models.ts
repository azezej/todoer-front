export interface Todo {
  id: number;
  content: string;
}

export interface TodoItem {
  id: number;
  summary: string;
  description: string;
  done: boolean;
  position: number;
}
