import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigsService} from '../configs.service';

@Injectable({
  providedIn: 'root'
})
export class MyadsService {

  constructor(private http:HttpClient, private Config : ConfigsService) { }

  // url= "http://localhost:7000/api/";
  // url= "http://54.180.142.192:7000/api/"; //aws

  fetchMyAds(email)
  	{
  		return this.http.post(this.Config.serverURL+'fetch_my_ads',email)
  	}

  deleteAdCarBike(id)
  {
  	return this.http.post(this.Config.serverURL+'deletead_carbike',id)
  }
}
