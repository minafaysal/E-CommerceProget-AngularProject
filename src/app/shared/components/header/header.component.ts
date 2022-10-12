import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/authGard/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggin:boolean=false;
  userData:any=[];
  name:string="";
  constructor(private islog:AuthService,private router:Router,private activatedRoute:ActivatedRoute) { 
    if(this.islog.IsLoggedIn())
    {
      this.loggin=true;
      this.userData=this.islog.IsLoggedIn() ;
     this.name= this.userData.fristname 
      console.log( );
      
    }
  }
   
  ngOnInit(): void {

  
  }
  
  
  removeLoggin=()=>{
    localStorage.removeItem("token");
    this.router.navigate(['auth/log'],{relativeTo:this.activatedRoute});
    this.loggin=false;
  }
  
 
   

}
