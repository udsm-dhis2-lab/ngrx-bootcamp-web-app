import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { HttpErrorResponse } from '@angular/common/http';
import { Todo } from '../models/todo.interface';

export interface TodoState extends EntityState<Todo> {
    loading: boolean;
    loaded: boolean;
    loadingTodo: boolean;
    loadedTodo: boolean;
    addingTodo: boolean;
    addedTodo: boolean;
    updatingTodo: boolean;
    updatedTodo: boolean;
    deletingTodo: boolean;
    deletedTodo: boolean;
    httpErrorResponse: HttpErrorResponse | null;
}

export const defaultTodo: TodoState = {
    ids: [],
    entities: {},
    loading: false,
    loaded: false,
    loadingTodo: false,
    loadedTodo: false,
    addingTodo: false,
    addedTodo: false,
    updatingTodo: false,
    updatedTodo: false,
    deletingTodo: false,
    deletedTodo: false,
    httpErrorResponse: null,
};

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialTodoState = todoAdapter.getInitialState(defaultTodo);
