import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class AppService {

  readonly rootUrl = 'http://localhost:56171/api';

  constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({  
        'Content-Type': 'application/json'
    })
  }

  getData(){  
    return this.http.get(this.rootUrl + '/pagamentos'); 
  }        
  postData(formData){  
    return this.http.post(this.rootUrl + '/pagamentos',formData);  
  } 

  putData(id, formData){
    console.log(id);
    return this.http.put(this.rootUrl + '/pagamentos/'+id, formData);  
  }  

  deleteData(id){  
    return this.http.delete(this.rootUrl + '/pagamentos/'+id);  
  }    

}
