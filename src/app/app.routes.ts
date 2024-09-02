import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './feature/todos/todos.component';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full', // This ensures that an empty path ('') redirects to '/home'
    },
    {
        path: 'todos',
        component: TodosComponent, // Directly specify the standalone component
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'todos',
                component: TodosComponent, // Directly specify the standalone component
            },
        ],
    },
    { path: '**', redirectTo: 'home' }, // Optional: catch-all route for undefined paths
];
