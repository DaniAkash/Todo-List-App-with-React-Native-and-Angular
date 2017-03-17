import { Provider } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskList } from '../task-list/task-list.component';
import { TaskDetails } from './../task-details/task-details.component';

export const appRoutes: Routes = [
  { path: '', component: TaskList },
  { path: 'details/:id', component: TaskDetails},
];

export const providers: Provider[] = RouterModule.forRoot(appRoutes)['providers'];