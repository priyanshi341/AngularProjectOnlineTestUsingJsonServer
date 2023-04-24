import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Builder } from 'protractor';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result:string="";
marks:number;
id:string="";
  constructor(private route:Router,private service:UserService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('idofuser');
    this.marks=parseInt(sessionStorage.getItem('usermarks'));
    this.marks=(this.marks/8)*100;
    if(this.marks<32)
    {
      this.result="Fail";
    }
    else{
      this.result="Pass";
    }
  }

}
