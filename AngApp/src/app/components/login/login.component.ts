import { Component,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login:any = FormGroup;
  submitted:boolean=false;
  users!:any[];
  constructor(private fb:FormBuilder,private router:Router,private commserv:CommonService){ }

  ngOnInit(): void {

     this.login = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.compose([Validators.required,Validators.email])]
     })

     this.commserv.getuser().subscribe((data:any)=>{
        this.users = data;
     })
  }

  
    gotoSignup(){
       this.router.navigate(['register']);
    }
    loginsubmit(){
      this.submitted=true;
      if(this.login.invalid){
         return;
      }
      this.commserv.getuser().subscribe((data:any)=>{
         console.log(data);
      
         const user = data.find((a:any)=>{
            return a.email === this.login.value.email && a.password===this.login.value.password;
         })
         
         if(user){
            alert("Login Successfully");

            this.router.navigate(["/Dashboard"]);
         }
         else{
            alert("Login Failed");
         }
      })
    }
}
