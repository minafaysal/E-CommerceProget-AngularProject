import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
url1:string="http://localhost:4000/users";
  constructor(private http :HttpClient) { }
  getuser(UserLogin:any){
    return this.http.get(this.url1+'?email='+UserLogin)
  }
}
