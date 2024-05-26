import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseurl='http://localhost:3000/user';

  constructor(private Http:HttpClient) { }


  getuser(){
    return this.Http.get(this.baseurl);
  }
  adduser(data:any){
    return this.Http.post(this.baseurl,data);
  }
  
}
