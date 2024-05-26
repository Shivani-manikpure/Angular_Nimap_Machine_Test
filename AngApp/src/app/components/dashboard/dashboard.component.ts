import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userList:any = [];
  constructor(private commonServ:CommonService,private router:Router){ }
 
 ngOnInit(): void{
  this.commonServ.getuser().subscribe((data:any)=>{
    this.userList = data;
  })
 }

 logout(){
  localStorage.clear();
  this.router.navigate(['login']);
 }

}
