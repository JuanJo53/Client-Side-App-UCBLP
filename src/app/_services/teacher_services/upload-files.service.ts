import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiKey from '../apiKey';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  private httpClient: HttpClient;

  constructor(private http:HttpClient,handler: HttpBackend) { 
    this.httpClient = new HttpClient(handler);}

  //CRUD temas
  getUrlpdf():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/storagepdf",{ observe: 'response' });
  }
  getUrlvideo():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/storagevideo",{ observe: 'response' });
  }
  getUrlaudio():Observable<any>{
    return this.http.get(apiKey.api+"/teacher/storageaudio",{ observe: 'response' });
  }
  
  subirArchivo(url:string,file:any):Observable<any>{
    
    
    let formData:FormData = new FormData();
    
    formData.append('fileKey', file, file.name);
    let httpheader=new HttpHeaders;
    httpheader.append("Content-Type","application/octet-stream'")   
    console.log(formData.get('fileKey'));       
    var r=this.httpClient.put(url,formData.get('fileKey')); 
    return r;
  }
}
