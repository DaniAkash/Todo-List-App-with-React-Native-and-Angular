import {Component} from '@angular/core';
import {StyleSheet} from 'react-native';
import { Task } from './dataTypes/Task';
import { TASKS } from './data/TASKS';

@Component({
  selector: 'hello-app',
  host: {position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'},
  template: `
<router-outlet></router-outlet>
<Image [styleSheet]="styles.image" [style]="{left: 0}" [source]="angularLogo"></Image>
<Image [styleSheet]="styles.image" [style]="{right: 0}" [source]="reactLogo" ></Image>
`
})
export class HelloApp {
  angularLogo: any = require('./assets/angular.png');
  reactLogo: any = require('./assets/react.png');
  styles: any;
  constructor() {
    this.styles = StyleSheet.create({
      image: {
        height: 100,
        width: 100,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0
      }
    });
  }
}

