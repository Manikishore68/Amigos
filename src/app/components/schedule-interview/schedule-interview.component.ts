import { Global } from 'src/app/global';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { debugOutputAstAsTypeScript, analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {
  angForm: FormGroup;
  tenantID:string;
  res: any;
  task:any;
sForm:any;
  constructor(private fb: FormBuilder, private taskservice: TaskService , private router:Router) { 
  this.angForm = this.fb.group({
    name: ['', Validators.required],
    assignee: ['', Validators.required],
    tenantID: ['', Validators.required],
    description: ['', Validators.required],
    interviewerDate:['' , Validators.required],
    interviewer:['' , Validators.required]
  });
  
}


  ngOnInit() {   
    this.task = history.state.task;
    Global.task = this.task;
  }
  onFormSubmit(){
    window.alert("working!");
  }

  saveOne(){
    var formobj = this.setValue( this.angForm.value);
    this.angForm = undefined
    this.taskservice.updateForm(formobj,this.task.id)
      .subscribe(res => {
      console.log("SuccessFully Saved Scheduled interview one");
      }, error => {
        console.log('Add business failure');
      }); 
  }

  saveTwo(){
    var formobj = this.setValueTwo( this.angForm.value);
    this.angForm = undefined
    this.taskservice.updateForm(formobj,this.task.id)
      .subscribe(res => {
      console.log("SuccessFully Saved Scheduled interview one");
      }, error => {
        console.log('Add business failure');
      });
  }

  completeOne(){
     var formobj = this.setValue( this.angForm.value);
    this.angForm = undefined
    this.taskservice.submitForm(formobj,this.task.id)
      .subscribe(res => {
      console.log("SuccessFully Saved Scheduled interview one");
      }, error => {
        console.log('Add business failure');
      });
    this.gotoMyTask();
    }
   
gotoMyTask(){
  Global.task=undefined;
  debugger;
  if(history.state.routeTo)
  this.router.navigate([history.state.routeTo]);
  else
  this.router.navigate(['/my-tasks']);
}
    completeTwo(){
      var formobj = this.setValueTwo( this.angForm.value);
      this.angForm = undefined
      this.taskservice.submitForm(formobj,this.task.id)
        .subscribe(res => {
        console.log("SuccessFully Saved Scheduled interview one");
        }, error => {
          console.log('Add business failure');
        });
        this.gotoMyTask();
      }


  setValue(angForm):any{
  var variable:any=  {
        "interviewer1": {
          "type": "String",
          "value": angForm.interviewer,
          "valueInfo": {}
        },
        "candidateName": {
          "type": "String",
          "value": angForm.name,
          "valueInfo": {}
        },
        "candidateInfo": {
          "type": "String",
          "value": angForm.assignee,
          "valueInfo": {}
        },
        "jobDescription": {
          "type": "String",
          "value": angForm.description,
          "valueInfo": {}
        },
        "candidateID": {
          "type": "String",
          "value": angForm.tenantID,
          "valueInfo": {}
        },
        "interview1Date": {
          "type": "String",
          "value": angForm.interviewerDate,
          "valueInfo": {}
        }
    }
    return variable;
    }

    setValueTwo(angForm){
      var variables={"interviewer2":{"type":"String","value":angForm.interviewer,"valueInfo":{}},"int2date":{"type":"String","value":angForm.interviewerDate,"valueInfo":{}}}
      return variables;
    }
}

