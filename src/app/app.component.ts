import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  isnavbarvisible1:boolean=false;
  isnavbarvisible2:boolean=false;
  isnavbarvisible3:boolean=false;
  title = 'ProjectUsingJsonServer';
constructor(private router:Router)
{

}
  ngDoCheck(): void {
      {
        let currenturl=this.router.url;
        if(currenturl=="/")
        {
           this.isnavbarvisible3=true;
           this.isnavbarvisible2=false;
           this.isnavbarvisible1=false;
        }
        else if(currenturl=="/admin" || currenturl=="/user")
        {
          this.isnavbarvisible3=false;
           this.isnavbarvisible2=false;
           this.isnavbarvisible1=false;
        }
        else if(currenturl=="/generalquestion" || currenturl=="/viewall")
        {
          this.isnavbarvisible2=true;
          this.isnavbarvisible3=false;
          this.isnavbarvisible1=false;
        }
        else if(currenturl=="/usertest" || currenturl=="/result"){
          this.isnavbarvisible2=false;
          this.isnavbarvisible3=false;
          this.isnavbarvisible1=true;
        }
      }
  }
}
