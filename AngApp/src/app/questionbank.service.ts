import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionbankService {
  baseurl='http://localhost:3000/QuestionBank';

  constructor(private Http:HttpClient) { }
  
  getuser(){
    return this.Http.get(this.baseurl);
  }
  adduser(data:any){
    return this.Http.post(this.baseurl,data);
  }
  deleteuser(id:any){
    return this.Http.delete(`${this.baseurl}/${id}`);
  }

  updateuser(id:any,data:any){
    return this.Http.get('${this.baseurl}/${id}');
  }
  addQuestion(data: any, Id = 0): Observable<any> {
    if (Id == 0) {
      return this.Http.post(this.baseurl, data)
    } else {
      return this.Http.put(`${this.baseurl}/${Id}`, data);
    }
  }
  getById(id:number){
    return this.Http.get(`${this.baseurl}/${id}`);
  }

}
