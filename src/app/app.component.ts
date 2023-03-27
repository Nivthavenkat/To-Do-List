import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'My Task List';
  tasklist: string[]=[];

  ngOnInit(): void {
    if(localStorage.getItem('My_tasks')){
      this.tasklist= JSON.parse(localStorage.getItem('My_tasks')|| '{}')
    }
  }
}
