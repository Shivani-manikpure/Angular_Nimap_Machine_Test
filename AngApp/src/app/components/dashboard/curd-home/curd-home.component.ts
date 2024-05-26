import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionbankService } from 'src/app/questionbank.service';



@Component({
  selector: 'app-curd-home',
  templateUrl: './curd-home.component.html',
  styleUrls: ['./curd-home.component.css']
})
export class CurdHomeComponent {
  questionForm:any;
  Id:number = 0;
  question:any
  constructor(private src:QuestionbankService,private active:ActivatedRoute,private router:Router){
    this.Id=this.active.snapshot.params['id'];
    if(this.Id > 0 && this.Id != 0){
    this.getById();
    }
  }
  ngOnInit(): void {
    this.questionForm= new FormGroup({
      examname: new FormControl(''),
      subject:new FormControl(''),
      std:new FormControl(''),
      chaptername:new FormControl(''),
    
    })
  }
  
  saveData(){
    let frm={
      id:this.Id,
      examname:this.questionForm.controls['examname'].value,
      subject:this.questionForm.controls['subject'].value,
      std:this.questionForm.controls['std'].value,
      chaptername:this.questionForm.controls['chaptername'].value
    }
      this.src.addQuestion(frm ,this.Id).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['/Dashboard/home'])
    })
  }
  patchData(){
    this.questionForm.setValue({
      examname:this.question.examname,
      subject:this.question.subject,
      std:this.question.std,
      chaptername:this.question.chaptername,
    })
  }
  getById(){
    this.src.getById(this.Id).subscribe((data:any)=>{
    console.log('result', data);
    this.question=data;
    this.patchData();
    })
  }
  }
  
