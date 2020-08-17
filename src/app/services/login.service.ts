import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigsService} from '../configs.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

// url= "http://localhost:7000/api/";
// url= "http://54.180.142.192:7000/api/"; //aws
  constructor(private http:HttpClient,  private Config : ConfigsService) { }

  userLogin(data)
  	{
  		console.log(data)
  		return this.http.post(this.Config.serverURL+'user_login',data);
  	}
}
