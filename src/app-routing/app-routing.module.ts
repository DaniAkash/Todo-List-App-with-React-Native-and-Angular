import { Provider } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskList } from '../task-list/task-list.component';

export const appRoutes: Routes = [
  { path: '', component: TaskList },
];

export const providers: Provider[] = RouterModule.forRoot(appRoutes)['providers'];