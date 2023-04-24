import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralquestionService } from '../generalquestion.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usertest',
  templateUrl: './usertest.component.html',
  styleUrls: ['./usertest.component.css']
})
export class UsertestComponent implements OnInit {
  id:number;
  question:string="";
  option1:string="";
  option2:string="";
  option3:string="";
  total:number=0;
data:any;
questionarray:any;
chk:boolean=false;
btncheck:boolean=false;
p:number=1;
  constructor(private router:Router,private questionservice:GeneralquestionService,private builder:FormBuilder) {
    sessionStorage.getItem('usermarks')==null;
   }



  ngOnInit(): void {  
this.questionarray=this.questionservice.getallquestions();

  }

usertestform=this.builder.group({
  
 
  gender:this.builder.control('',Validators.required)
});

nextbuttonaction(question:string)
{
 
  if(this.p==7)
  {
    this.btncheck=true;
  }
  this.p=this.p+1;
 
 if(question=="Which One is the smallest ocean in the world" 
 && this.usertestform.controls.gender.value=="Arctic")
 {
 this.total=this.total+1;
 }
 else if(question=="Which Country Gifted the \"Statue Of Liberty\" to USA in 1886" 
 && this.usertestform.controls.gender.value=="France"){
  this.total=this.total+1;
 }
 else if(question=="In Which Ocean Bermuda Triangle Ocean Is Located" 
 && this.usertestform.controls.gender.value=="Atlantic"){
  this.total=this.total+1;
 }
 else if(question=="Which Country Is Known as Playground Of Europe" 
 && this.usertestform.controls.gender.value=="Switzerland"){
  this.total=this.total+1;
 }
 else if(question=="Which Country is also known as land of rising sun" 
 && this.usertestform.controls.gender.value=="japan"){
  this.total=this.total+1;
 }
 else if(question=="Which continent has the highest number of countries" 
 && this.usertestform.controls.gender.value=="Africa "){
  this.total=this.total+1;
 }
 else if(question=="In which country the white elephant is found" 
 && this.usertestform.controls.gender.value=="Thailand"){
  this.total=this.total+1;
 }
 
 else{
  this.total=this.total+0;
 }


}

submitbuttonaction(question:string)
{
  if(question=="Total number of oceans in the world" 
 && this.usertestform.controls.gender.value=="5"){
  this.total=this.total+1;
 }
sessionStorage.setItem('usermarks',this.total.toString());
this.router.navigate(['/result']);

 
}


}

