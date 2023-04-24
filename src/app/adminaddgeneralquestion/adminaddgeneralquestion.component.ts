import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms';
import { GeneralquestionService } from '../generalquestion.service';
@Component({
  selector: 'app-adminaddgeneralquestion',
  templateUrl: './adminaddgeneralquestion.component.html',
  styleUrls: ['./adminaddgeneralquestion.component.css']
})
export class AdminaddgeneralquestionComponent implements OnInit {


  constructor(private builder:FormBuilder,private questionserv:GeneralquestionService) { }

  ngOnInit(): void {
  }

  generalquesform=this.builder.group({
    id:this.builder.control('',Validators.required),
    question:this.builder.control('',Validators.required),
    option1:this.builder.control('',Validators.required),
    option2:this.builder.control('',Validators.required),
    option3:this.builder.control('',Validators.required)
  });

  submitbuttonaction()
  {
    this.questionserv.savequestion(this.generalquesform.value).subscribe(data=>{
     alert("question added successfully");
    
    });
  }
}
