import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigsService} from '../configs.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

	url= "http://localhost:7000/api/";
  // url= "http://54.180.142.192:7000/api/"; //aws

  constructor(private http:HttpClient, private Config : ConfigsService) { }

  sendOTP(data)
  {
  	return this.http.post(this.Config.serverURL+"send_confirmation_otp",data);
  }

  registerUser(data)
  	{
  		return this.http.post(this.Config.serverURL+"register_user",data)
  	}

}
