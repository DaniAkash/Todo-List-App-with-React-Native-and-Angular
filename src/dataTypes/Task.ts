type Priority = 'High'
  | 'Med'
  | 'Low';

export class Task {
  id: number;
  name: string;
  priority: Priority;
}