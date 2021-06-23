import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {
  url: string = "https://www.trackcorona.live/api/countries"

  constructor(private http: HttpClient) { }

  getByCountryCode(code:any){
    return this.http.get(this.url+'/'+code)
  }

  getAllInfo(){
    return this.http.get(this.url)
  }
}
