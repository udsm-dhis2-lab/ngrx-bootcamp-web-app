import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { LayoutStandaloneComponents } from './layout/layout';
import { TodoActions } from './feature/todos/state/todos.actions';
import { TodoState } from './feature/todos/state/todos.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutStandaloneComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-bootcamp-web-app';

  constructor(private todoState: Store<TodoState>) {
  }

  ngOnInit() {
    this.todoState.dispatch(TodoActions.loadTodos());

    this.todoState.dispatch(TodoActions.loadTodosSuccess({
      todos: [
        { title: 'Software is like sex, it is better when it is free!', completed: false, id: "1" },
        { title: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.', completed: true, id: "2" }
      ]
    }));
  }
}
