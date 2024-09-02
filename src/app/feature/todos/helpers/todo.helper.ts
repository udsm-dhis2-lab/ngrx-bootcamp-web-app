import { Todo } from "../models/todo.interface";

/**
 * Filters and returns completed todos from the provided list.
 * @param todos - An array of Todo items.
 * @returns An array of completed Todo items.
 */
export function getCompletedTodoList(todos: Todo[]): Todo[] {
    return todos.filter(todo => todo.completed);
}


/**
 * Filters and returns completed todos from the provided list.
 * @param todos - An array of Todo items.
 * @returns An array of completed Todo items.
 */
export function getPendingTodosList(todos: Todo[]): Todo[] {
    return todos.filter(todo => !todo.completed);
}
