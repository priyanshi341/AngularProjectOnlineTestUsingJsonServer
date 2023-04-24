import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  private urlapi=' http://localhost:3000/Admin';

  getadmin(id:any)
  {
    return this.http.get(this.urlapi+'/'+id);
  }
}
