import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigsService} from '../configs.service';
@Injectable({
  providedIn: 'root'
})
export class PreviewService {
// url= "http://localhost:7000/api/";
// url= "http://54.180.142.192:7000/api/"; //aws
  constructor(private http:HttpClient, private Config : ConfigsService) { }


  getCarBikePreviewData(id)  
  	{
  		return this.http.post(this.Config.serverURL+'get_carbike_preview_data',id)
  	}

  countVisits(visitsData)
  	{
  		return this.http.post(this.Config.serverURL+'count_visits',visitsData);
  	}
}
