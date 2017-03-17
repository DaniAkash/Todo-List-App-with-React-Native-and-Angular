import {Component} from '@angular/core';
import {StyleSheet} from 'react-native';
import { Task } from '../dataTypes/Task';
import { TASKS } from '../data/TASKS';
import { TaskService } from "../task.service";

@Component({
  selector: 'task-list',
  host: {position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'},
  template: `
<View [styleSheet]="styles.container">
  <Text [styleSheet]="styles.heading">
    ToDoList
  </Text>
  <View [style]="{width: 200, height: 45}">
    <TextInput placeholder="Add new Task" (submit)="addTask($event)" clearTextOnFocus={{true}}></TextInput>
  </View>
  <View [styleSheet]="styles.taskView" *ngFor="let task of tasks; let listIndex = index">
    <Text [styleSheet]="styles.instructions">
      {{listIndex+1}}. {{task.name}}
    </Text>
  </View>
  <Text [styleSheet]="styles.button" opacityFeedback (tap)="showMore=!showMore" testID="Show_More">
    {{showMore ? 'Hide more' : 'Show more'}}
  </Text>
  <Text *ngIf="showMore" [styleSheet]="styles.instructions">
    To get really more, it's time to start coding!
  </Text>
</View>
<Image [styleSheet]="styles.image" [style]="{left: 0}" [source]="angularLogo"></Image>
<Image [styleSheet]="styles.image" [style]="{right: 0}" [source]="reactLogo" ></Image>
`
})
export class TaskList {
  angularLogo: any = require('../assets/angular.png');
  reactLogo: any = require('../assets/react.png');
  tasks:Task[] = [];
  showMore: boolean = false;
  styles: any;

  constructor(
    private taskService: TaskService
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
    this.tasks = this.taskService.getTasks();
  }

  addTask(taskName: string): void {
    if(taskName === "") alert('Please enter a task name!');
    else
      this.taskService.addTask(taskName);
    taskName = "";
  }
}

