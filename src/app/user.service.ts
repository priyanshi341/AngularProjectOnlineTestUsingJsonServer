import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private urlapi='http://localhost:3000/User';

  saveuser(user:any)
  {
    return this.http.post(this.urlapi,user);
  }

  getallusers()
  {
    return this.http.get(this.urlapi);
  }

  getuserbyid(id:any)
  {
    return this.http.get(this.urlapi+'/'+id);
  }
  
}
