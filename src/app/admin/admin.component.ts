import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admininfo:any;
  constructor(private builder:FormBuilder ,private adminserv:AdminService,private route:Router) { }

  ngOnInit(): void {
this.adminserv.getadmin(1).subscribe(data=>{
  this.admininfo=data;
});
  }

  adminform=this.builder.group({
   username:this.builder.control('',Validators.required),
   password:this.builder.control('',Validators.required)
  });

  adminclickbutton()
  {
    if(this.adminform.controls.username.value==this.admininfo.username 
      && this.adminform.controls.password.value==this.admininfo.password)
      {
        this.route.navigate(['/generalquestion']);
      }
      else{
        alert("wrong admin");
      }
  }


}
