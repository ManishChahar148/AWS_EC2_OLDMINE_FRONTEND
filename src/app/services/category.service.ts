import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigsService} from '../configs.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
// url= "http://localhost:7000/api/";
// url= "http://54.180.142.192:7000/api/"; //aws
  constructor(private http:HttpClient, private Config : ConfigsService) { }
    
    getCat()
    {
        return this.http.get(this.Config.serverURL+'fetch_categories');
    }
}


