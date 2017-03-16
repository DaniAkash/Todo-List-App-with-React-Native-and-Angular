import {Component} from '@angular/core';
import {StyleSheet} from 'react-native';
import { Task } from './dataTypes/Task';
import { TASKS } from './data/TASKS';

@Component({
  selector: 'hello-app',
  host: {position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'},
  template: `
<router-outlet></router-outlet>
`
})
export class HelloApp {
  typed: string = "";
}

