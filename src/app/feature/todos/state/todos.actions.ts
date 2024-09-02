import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../models/todo.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Update } from '@ngrx/entity';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Load Todo': props<{ id: string }>(),
    'Load Todo Success': props<{ todo: Todo }>(),
    'Load Todo Failure': props<{ httpErrorResponse: HttpErrorResponse }>(),
    'Load Todos': emptyProps(),
    'Load Todos Success': props<{ todos: Todo[] }>(),
    'Load Todos Failure': props<{ httpErrorResponse: HttpErrorResponse }>(),
    'Add Todo': props<{ todo: Todo }>(),
    'Add Todo Success': props<{ todo: Todo }>(),
    'Add Todo Failure': props<{ httpErrorResponse: HttpErrorResponse }>(),
    'Update Todo': props<{ todo: Update<Todo> }>(),
    'Update Todo Success': props<{ todo: Update<Todo> }>(),
    'Update Todo Failure': props<{ httpErrorResponse: HttpErrorResponse }>(),
    'Delete Todo': props<{ todo: Todo }>(),
    'Delete Todo Success': props<{ todo: Todo }>(),
    'Delete Todo Failure': props<{ httpErrorResponse: HttpErrorResponse }>(),
  },
});
