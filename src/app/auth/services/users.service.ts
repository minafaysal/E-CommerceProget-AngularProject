import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../Classes/users';
 

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string="http://localhost:4000/users";


  constructor(private http:HttpClient) { }
  //return video
  postuser(user:User){
    return this.http.post(this.url,user);
  }
}
