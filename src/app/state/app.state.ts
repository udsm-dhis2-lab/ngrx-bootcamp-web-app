import { InjectionToken } from '@angular/core';
import { MetaReducer, ActionReducerMap } from '@ngrx/store';
import { TodoEffects } from '../feature/todos/state/todos.effects';
import {
    todoFeatureKey,
    TodoReducer,
} from '../feature/todos/state/todos.reducer';
import {
    TodoState,
    initialTodoState,
} from '../feature/todos/state/todos.state';

export interface AppState {
    [todoFeatureKey]: TodoState;
}

export const initialAppState: AppState = {
    [todoFeatureKey]: initialTodoState,
};

export const metaReducers: MetaReducer<AppState>[] = true ? [] : [];

export const appReducers: ActionReducerMap<AppState> = {
    [todoFeatureKey]: TodoReducer,
};

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
    'App Reducers'
);

export const ReducerProvider = {
    provide: REDUCERS_TOKEN,
    useValue: appReducers,
};

export const appEffects = [TodoEffects];
