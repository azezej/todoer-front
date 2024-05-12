export interface Todo {
  id: number;
  content: string;
}

export interface TodoItem {
  id: number;
  summary: string;
  description: string;
  done: true | false | 'partial';
  position: number;
}
