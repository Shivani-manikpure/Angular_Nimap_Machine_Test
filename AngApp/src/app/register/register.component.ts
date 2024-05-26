import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import{ CommonService } from '../common.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any = FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private commServ:CommonService){}

  ngOnInit(): void {
    this.register = this.fb.group({
      id:[''],
      Fname:[''],
      Lname:[''],
      Mobile:[''],
      email:[''],
      password:[''],
    })
  }

registerSubmit(){
     
  this.commServ.adduser(this.register.value).subscribe((data:any)=>{
    console.log(data);
  })
}
gotoLogin(){
  this.router.navigate(['login'])
}

}
