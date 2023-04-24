import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
username:string="";
email:string="";
password:string="";
allusers:any;
msg:string="";
  constructor(private builder:FormBuilder,private userserv:UserService,private route:Router) {
    sessionStorage.clear();
   }

  ngOnInit(): void {
    
    this.userserv.getallusers().subscribe(data=>{
this.allusers=data;
    });
  }

  userform=this.builder.group({
    id:this.builder.control('',Validators.required),
    username:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  });

userclickbutton()
{


for(var c of this.allusers)
{
  if(this.username==c.username && this.password==c.password)
  {
    sessionStorage.setItem('idofuser',this.username);
this.route.navigate(['/usertest']);
  }
  else{
this.msg="wrong user";
  }
}




  

}
}
