import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private api_url:string = "https://free-nba.p.rapidapi.com/teams?page=0";
  private x_rapidapi_host:string = "free-nba.p.rapidapi.com";
  private x_rapidapi_key:string = "2620afccd9msh7c29835925678ddp1f45ebjsneb9704bfa4bd";

  constructor(private http: HttpClient) { }

  public getTeams() {
    return this.http.get(this.api_url,{
      headers: {
        "x-rapidapi-host": this.x_rapidapi_host,
        "x-rapidapi-key": this.x_rapidapi_key
      }
    });
  }
}
