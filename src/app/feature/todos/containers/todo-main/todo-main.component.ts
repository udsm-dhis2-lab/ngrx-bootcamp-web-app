import { Component } from '@angular/core';
import { TodoHeaderComponent } from '../../components/todo-header/todo-header.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TodoFooterComponent } from '../../components/todo-footer/todo-footer.component';

@Component({
  selector: 'app-todo-main',
  standalone: true,
  imports: [TodoHeaderComponent, TodoListComponent, TodoFooterComponent],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.scss'
})
export class TodoMainComponent {

}
