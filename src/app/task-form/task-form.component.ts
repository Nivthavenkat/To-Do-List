import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
@Input() taskList: any;
newTask: string;
  constructor(){}
  AddToDo(): void{
    this.taskList.unshift(this.newTask);
    localStorage.setItem('My_tasks',JSON.stringify(this.taskList))
    this.newTask=" ";
    console.log("TaskList Calling");
  }
}
