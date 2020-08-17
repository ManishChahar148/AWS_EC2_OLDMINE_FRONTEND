import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigsService} from '../configs.service';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

	url= "http://localhost:7000/api/";
  // url= "http://54.180.142.192:7000/api/"; //aws
  constructor(private http:HttpClient, private Config : ConfigsService) { }

  sendMessage(data)
  	{
  		return this.http.post(this.Config.serverURL+'save_chats',data);
  	}

 fetchChatsCurrent(data)
  	{
  		return this.http.post(this.Config.serverURL+'fetch_chats_my',data);
  	}


  getReq(data)
  	{
  		return this.http.post(this.Config.serverURL+'get_req',data);
  	}

}

