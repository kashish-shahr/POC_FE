import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { editorData } from './editor';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EditorService {
  private url:string = environment.url+"editordata/";
  constructor(private _http:HttpClient) { }
  getAllEditorData(){
    return this._http.get(this.url);
  }
}
 