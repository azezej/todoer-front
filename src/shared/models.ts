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

export interface List {
  id: number;
  name: string;
  items: (TodoItem | List)[];
}
