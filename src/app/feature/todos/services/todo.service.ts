import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Todo } from '../models/todo.interface';

@Injectable()
export class TodoService {
  constructor() { }

  loadTodo(id: string): Observable<Todo> {
    return of();
  }

  addTodo(todo: Todo): Observable<Todo> {
    return of(todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return of(todo);
  }

  deleteTodo(id: string): Observable<Todo> {
    return of();
  }

  loadTodos(): Observable<Todo[]> {
    const todos: Todo[] = [
      { title: 'Example Task 1', completed: false, id: '1' },
      { title: 'Example Task 2', completed: true, id: '2' },
    ];

    return of([]);
  }
}
