import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopBannerService {
  private url:string=environment.url+'editordata';
  constructor(private _http:HttpClient) { }

  getEditorData(){
    let x=new HttpHeaders().set(environment.header1,environment.header2);
    return this._http.get(this.url,{headers:x});
  }
}
