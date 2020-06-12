import { Global } from './../../global';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-my-group-tasks',
  templateUrl: './my-group-tasks.component.html',
  styleUrls: ['./my-group-tasks.component.css']
})
export class MyGroupTasksComponent implements OnInit {
  groupTasks:any;

  

  constructor(private taskService:TaskService) { 

  }



  ngOnInit() {
    this.getGroupTasks();
    Global.task = undefined;
  }

 
  getGroupTasks(){
    this.taskService.getGroupTasks().subscribe(
     (data) => this.groupTasks =data
     );
   }
   

   
}
