import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralquestionService {
private urlapi='http://localhost:3000/Generalquestions';

  constructor(private http:HttpClient) { }
  savequestion(question:any)
  {
    return this.http.post(this.urlapi,question);
  }

  getallquestions()
  {
    return this.http.get(this.urlapi);
  }

  getquestionbyid(id:any)
  {
    return this.http.get(this.urlapi+'/'+id);
  }
  
}
