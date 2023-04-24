import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
userinfo:any;
  constructor(private service:UserService,) { }

  ngOnInit(): void {
    this.service.getallusers().subscribe(data=>{
      this.userinfo=data;
    });
  }

}
