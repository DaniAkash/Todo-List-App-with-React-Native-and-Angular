import {Component, Input, OnInit} from '@angular/core';
import {LocationStrategy, Location} from '@angular/common';
import {StyleSheet} from 'react-native';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { Task } from '../dataTypes/Task';
import { TASKS } from '../data/TASKS';
import { TaskService } from "../task.service";

@Component({
  selector: 'task-list',
  host: {position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'},
  template: `
<View [styleSheet]="styles.container">
  <Text [styleSheet]="styles.heading">
    {{task.name}}
  </Text>
  <Image [source]="backIcon" [styleSheet]="styles.backButton" opacityFeedback (tap)="goBack()">
  </Image>
  <View [styleSheet]="styles.details">
    <Text>Priority - {{task.priority}}</Text>
  </View>
</View>
`
})
export class TaskDetails implements OnInit {
  @Input()
  task:Task;

  backIcon: any = require('../assets/left-arrow.png');
  styles: any;

  constructor(
    private taskService: TaskService,
    private locationStrategy: LocationStrategy,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.styles = StyleSheet.create({
      container: {
        position: 'absolute',
        left: 0,
        right:0,
        top: 0,
        bottom: 0,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
      },
      heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 40,
        alignSelf: 'center',
      },
      backButton: {
        alignSelf: 'flex-start',
        height: 25,
        width: 25,
        marginLeft: 20,
        padding: 10,
      },
      details: {
        alignSelf: 'center',
      },
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.task = this.taskService.getTask(+params['id']);
    });
  }

  goBack(): void {
    this.locationStrategy.back();
  }

}

