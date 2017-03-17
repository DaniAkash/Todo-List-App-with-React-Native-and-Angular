import {Component, OnInit} from '@angular/core';
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
    <TextInput placeholder="Add new Task" (submit)="addTask($event)" [clearTextOnFocus]="true"></TextInput>
  </View>
  <View [styleSheet]="styles.taskView" *ngFor="let task of tasks; let listIndex = index">
    <View></View>
    <Text [styleSheet]="styles.instructions" [routerLink]="['/details', listIndex]" event="tap">
      {{task.name}}
    </Text>
    <Image [source]="deleteIcon" [styleSheet]="styles.deleteButton" opacityFeedback (tap)="deleteTask(listIndex)">
    </Image>
  </View>
</View>
`
})
export class TaskList implements OnInit {
  tasks:Task[] = [];
  showMore: boolean = false;
  styles: any;
  deleteIcon: any = require('../assets/delete.png');

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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      deleteButton: {
        padding: 5,
        height: 25,
        width:25,
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

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}

