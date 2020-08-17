import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

   serverURL=''
  constructor() {
    this.serverURL = "http://localhost:7000/api/";
   }

   
}
