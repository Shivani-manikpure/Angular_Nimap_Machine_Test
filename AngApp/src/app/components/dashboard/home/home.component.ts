import { Component } from '@angular/core';
import { QuestionbankService } from 'src/app/questionbank.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  questionbank:any;
  constructor(private src:QuestionbankService){
  this.getuser();
}
getuser(){
  this.src.getuser().subscribe(data=>{
    console.log(data);
    this.questionbank=data;
  })
}
deleteUser(id:any){
  this.src.deleteuser(id).subscribe(data=>{
    console.log(data);
    this.questionbank=data;
  })
}

}