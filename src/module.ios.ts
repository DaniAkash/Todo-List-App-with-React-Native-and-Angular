import {NgModule} from '@angular/core';
import {CommonModule, LocationStrategy} from '@angular/common';
import {ReactNativeiOSModule, ReactNativeRouterModule, ReactNativeLocationStrategy} from 'angular2-react-native';

import {HelloApp} from './hello';
import {TaskList} from './task-list/task-list.component';
import { TaskDetails } from './task-details/task-details.component';
import { TaskService } from "./task.service";
import {
  providers,
  appRoutes,
} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    HelloApp, 
    TaskList,
    TaskDetails,
  ],
  imports: [
    ReactNativeiOSModule, 
    CommonModule, 
    ReactNativeRouterModule
  ],
  providers: [
    providers, 
    {provide: LocationStrategy, useClass: ReactNativeLocationStrategy},
    TaskService
  ],
  bootstrap: [HelloApp]
})
export class HelloModule {}