import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  url="http://ec2-13-125-250-138.ap-northeast-2.compute.amazonaws.com:7000/api/";

  adminLogin(data)
  {
  	return this.http.post(this.url+"admin_login",data);
  }
}
