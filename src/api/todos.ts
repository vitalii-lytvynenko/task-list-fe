import { Todo } from '../types';
import { client } from '../utils/fetchClient';

export const getTodos = () => {
  return client.get<Todo[]>(`/Tasks`);
};

export const createTodo = (todo: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/Tasks', todo);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/Tasks/${id}`);
};

export const editTodo = (id: number, data: Partial<Todo>) => {
  return client.patch<Todo>(`/Tasks/${id}`, data);
};
