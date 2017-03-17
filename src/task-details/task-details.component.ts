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
    Details {{task.name}}
  </Text>
</View>
`
})
export class TaskDetails implements OnInit {
  @Input()
  task:Task;

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
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      taskView: {
        backgroundColor: 'whitesmoke',
        marginBottom: 5,
        padding: 15,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 100,
      },
      heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 40,
      },
      inputView: {
        width: 300, 
        height: 45,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      button: {
        width: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#32BAF5',
        padding: 10,
        margin: 20,
        color: 'white'
      },
      image: {
        height: 100,
        width: 100,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.task = this.taskService.getTask(+params['id']);
    });
  }

}

