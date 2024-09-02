import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Todo } from '../models/todo.interface';
import { TodoService } from '../services/todo.service';
import { TodoActions } from './todos.actions';
import { Update } from '@ngrx/entity';

Injectable();
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      map((payload: { todo: Todo }) => payload),
      switchMap((payload: { todo: Todo }) =>
        this.todoService.addTodo(payload.todo).pipe(
          map((todo: Todo) => {
            return TodoActions.addTodoSuccess({
              todo,
            });
          }),
          catchError((httpErrorResponse: HttpErrorResponse) =>
            of(TodoActions.addTodoFailure({ httpErrorResponse }))
          )
        )
      )
    )
  );

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() => {
        return this.todoService.loadTodos().pipe(
          map((todos: Todo[]) => TodoActions.loadTodosSuccess({ todos })),
          catchError((httpErrorResponse: HttpErrorResponse) =>
            of(TodoActions.loadTodosFailure({ httpErrorResponse }))
          )
        );
      })
    )
  );

  getTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodo),
      map((payload: { id: string }) => payload),
      switchMap((payload: { id: string }) =>
        this.todoService.loadTodo(payload?.id).pipe(
          map((todo: Todo) => TodoActions.loadTodoSuccess({ todo })),
          catchError((httpErrorResponse: HttpErrorResponse) =>
            of(TodoActions.loadTodoFailure({ httpErrorResponse }))
          )
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateTodo),
      map((payload: any) => payload),
      switchMap((payload: { todo: Todo }) =>
        this.todoService.updateTodo(payload.todo).pipe(
          map((todo: Todo) => {
            const updatedTodo: Update<Todo> = { id: todo.id, changes: todo };
            return TodoActions.updateTodoSuccess({ todo: updatedTodo });
          }),
          catchError((httpErrorResponse: HttpErrorResponse) =>
            of(TodoActions.updateTodoFailure({ httpErrorResponse }))
          )
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      map((payload: { todo: Todo }) => payload),
      switchMap((payload: { todo: Todo }) =>
        this.todoService.deleteTodo(payload.todo.id).pipe(
          map((todo: Todo) =>
            TodoActions.deleteTodo({
              todo,
            })
          ),
          catchError((httpErrorResponse: HttpErrorResponse) =>
            of(TodoActions.deleteTodoFailure({ httpErrorResponse }))
          )
        )
      )
    )
  );
}
