import { Action, createReducer, on } from '@ngrx/store';
import { TodoActions } from './todos.actions';
import { initialTodoState, todoAdapter, TodoState } from './todos.state';

export const todoFeatureKey = 'todos';

const todoReducer = createReducer(
  initialTodoState,
  on(TodoActions.addTodo, (state: TodoState, { todo }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      loadingTodo: false,
      loadedTodo: false,
      addingTodo: true,
      addedTodo: false,
      updatingTodo: false,
      updatedTodo: false,
      deletingTodo: false,
      deletedTodo: false,
      httpErrorResponse: null,
    };
  }),
  on(TodoActions.addTodoSuccess, (state: TodoState, { todo }) => {
    return todoAdapter.upsertOne(todo, {
      ...state,
      loading: false,
      loaded: false,
      loadingTodo: false,
      loadedTodo: false,
      addingTodo: false,
      addedTodo: true,
      updatingTodo: false,
      updatedTodo: false,
      deletingTodo: false,
      deletedTodo: false,
      httpErrorResponse: null,
    });
  }),
  on(TodoActions.addTodoFailure, (state: TodoState, { httpErrorResponse }) => ({
    ...state,
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
    httpErrorResponse,
  })),
  on(TodoActions.loadTodo, (state: TodoState) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      loadingTodo: true,
      loadedTodo: false,
      addingTodo: false,
      addedTodo: false,
      updatingTodo: false,
      updatedTodo: false,
      deletingTodo: false,
      deletedTodo: false,
      httpErrorResponse: null,
    };
  }),
  on(TodoActions.loadTodoSuccess, (state: TodoState, { todo }) => {
    return todoAdapter.upsertOne(todo, {
      ...state,
      loading: false,
      loaded: false,
      loadingTodo: false,
      loadedTodo: true,
      addingTodo: false,
      addedTodo: false,
      updatingTodo: false,
      updatedTodo: false,
      deletingTodo: false,
      deletedTodo: false,
      httpErrorResponse: null,
    });
  }),
  on(
    TodoActions.loadTodoFailure,
    (state: TodoState, { httpErrorResponse }) => ({
      ...state,
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
      httpErrorResponse,
    })
  ),
  on(TodoActions.loadTodos, (state: TodoState) => {
    return {
      ...state,
      loading: true,
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
  }),
  on(TodoActions.loadTodosSuccess, (state: TodoState, { todos }) => {
    return todoAdapter.upsertMany(todos, {
      ...state,
      loading: false,
      loaded: true,
      loadingTodo: false,
      loadedTodo: false,
      addingTodo: false,
      addedTodo: false,
      updatingTodo: false,
      updatedTodo: false,
      deletingTodo: false,
      deletedTodo: false,
      httpErrorResponse: null,
    });
  }),
  on(
    TodoActions.loadTodosFailure,
    (state: TodoState, { httpErrorResponse }) => ({
      ...state,
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
      httpErrorResponse,
    })
  ),
  on(TodoActions.updateTodo, (state: TodoState, { todo }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      loadingTodo: false,
      loadedTodo: false,
      addingTodo: false,
      addedTodo: false,
      updatingTodo: true,
      updatedTodo: false,
      deletingTodo: false,
      deletedTodo: false,
      httpErrorResponse: null,
    };
  }),
  on(TodoActions.updateTodoSuccess, (state: TodoState, { todo }) => {
    return todoAdapter.updateOne(todo, {
      ...state,
      loading: false,
      loaded: false,
      loadingTodo: false,
      loadedTodo: false,
      addingTodo: false,
      addedTodo: false,
      updatingTodo: false,
      updatedTodo: true,
      deletingTodo: false,
      deletedTodo: false,
      httpErrorResponse: null,
    });
  }),
  on(
    TodoActions.updateTodoFailure,
    (state: TodoState, { httpErrorResponse }) => ({
      ...state,
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
      httpErrorResponse,
    })
  ),
  on(TodoActions.deleteTodo, (state: TodoState, { todo }) => {
    return {
      ...state,
      loading: false,
      loaded: false,
      loadingTodo: false,
      loadedTodo: false,
      addingTodo: false,
      addedTodo: false,
      updatingTodo: false,
      updatedTodo: false,
      deletingTodo: true,
      deletedTodo: false,
      httpErrorResponse: null,
    };
  }),
  on(TodoActions.deleteTodoSuccess, (state: TodoState, { todo }) => {
    return todoAdapter.removeOne(todo?.id, {
      ...state,
      loading: false,
      loaded: false,
      loadingTodo: false,
      loadedTodo: false,
      addingTodo: false,
      addedTodo: false,
      updatingTodo: false,
      updatedTodo: false,
      deletingTodo: false,
      deletedTodo: true,
      httpErrorResponse: null,
    });
  }),
  on(
    TodoActions.deleteTodoFailure,
    (state: TodoState, { httpErrorResponse }) => ({
      ...state,
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
      httpErrorResponse,
    })
  )
);

export function TodoReducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}
