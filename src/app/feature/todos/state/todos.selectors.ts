import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureKey } from './todos.reducer';
import { TodoState, todoAdapter } from './todos.state';
import {
    getCompletedTodoList,
    getPendingTodosList,
} from '../helpers/todo.helper';
import { Todo } from '../models/todo.interface';

export const getTodoFeature = createFeatureSelector<TodoState>(todoFeatureKey);

export const {
    selectEntities: getTodoEntities,
    selectAll: getTodos,
    selectIds: getTodoIds,
    selectTotal: getTodosTotal,
} = todoAdapter.getSelectors(getTodoFeature);

// export const getTodoById = (id: string) => (getTodoEntities as any)[id];

// New selector for completed todos
export const getCompletedTodos = createSelector(getTodos, (todos: Todo[]) =>
    getCompletedTodoList(todos)
);

// New selector for completed todos
export const getPendingTodos = createSelector(getTodos, (todos: Todo[]) =>
    getPendingTodosList(todos)
);

export const getTodosLoadingStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.loading
);

export const getTodosLoadedStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.loaded
);

export const getTodoLoadingStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.loadingTodo
);

export const getTodoLoadedStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.loadedTodo
);

export const getAddingTodoStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.addingTodo
);

export const getAddedTodoStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.addedTodo
);

export const getUpdatingTodoStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.updatingTodo
);

export const getUpdatedTodoStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.updatedTodo
);

export const getDeletingTodoStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.deletingTodo
);

export const getDeletedTodoStatus = createSelector(
    getTodoFeature,
    (state: TodoState) => state?.deletedTodo
);

export const getTodoHttpErrorResponse = createSelector(
    getTodoFeature,
    (state: TodoState) => state.httpErrorResponse
);
