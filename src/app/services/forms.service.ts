import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigsService} from '../configs.service';
@Injectable({
  providedIn: 'root'
})
export class FormsService {
// url= "http://localhost:7000/api/";
// url= "http://54.180.142.192:7000/api/"; //aws
  constructor(private http:HttpClient, private Config : ConfigsService) { }

  postcar(data)
  	{
  		return this.http.post(this.Config.serverURL+'post_car_bike',data)
  	}


  getCar_Bikes()
  	{
  		return this.http.get(this.Config.serverURL+'get_car_bikes')
  	}

 
    countLikes(likesData)
    {
      return this.http.post(this.Config.serverURL+'count_likes',likesData);
    }
}
