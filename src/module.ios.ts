import {NgModule} from '@angular/core';
import {CommonModule, LocationStrategy} from '@angular/common';
import {ReactNativeiOSModule, ReactNativeRouterModule, ReactNativeLocationStrategy} from 'angular2-react-native';
import { TaskService } from "./task.service";

import {HelloApp} from './hello';
import {TaskList} from './task-list/task-list.component';
import {
  providers,
  appRoutes,
} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    HelloApp, 
    TaskList
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