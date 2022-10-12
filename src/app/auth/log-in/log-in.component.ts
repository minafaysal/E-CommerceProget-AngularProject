import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
 
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private fb:FormBuilder,private userloginservice:UserLoginService,private router:Router,private activatedRoute:ActivatedRoute) { }
  LoginForm:any;
  RegArray:any;
  // userlogin:Login= new Login("","");



  ngOnInit(): void {
    this.LoginForm=new FormGroup({
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "password":new FormControl(null,[ Validators.required]),


    },);
  }
  // submit button
  // submitData(){
  //   console.log(this.LoginForm.value);
  //   if(this.LoginForm.valid){
  //     alert(`Thank you ${this.LoginForm.value.fristname}`);
  //     this.LoginForm.reset();
  //   }
  // }
  usersArr:any;
  saveData(){
     //console.log("form ",this.LoginForm.value.email);
    this.userloginservice.getuser (this.LoginForm.value.email).subscribe(
      data=>{
        
        this.usersArr=data;
        
        console.log("sucess",this.usersArr[0].email);
       // alert("continue")
       if(this.usersArr[0].email==this.LoginForm.value.email)
      {
         localStorage.setItem("token" , JSON.stringify(this.usersArr[0]));
         this.router.navigate([''])
  .then(() => {
    window.location.reload();
  });
           
      }
        // local storge ahmed@yahoo.com
      },
      error=>{
        console.log("Error",error)
      }
    )
    let checkUser=this.usersArr?.filter(
      (user:any )=>user.email==this.email?.value && user.password==this.password?.value
    )
      console.log(checkUser)
      if(checkUser){
          this.router.navigate([""]);
          this.router.navigate(['products'],{relativeTo:this.activatedRoute});


    }
    else{
      alert("email or password incorrect")
    }
  }

  get email(){
    return this.LoginForm.get('email');
  }
  get password() {
    return this.LoginForm.get('password');
  }


}
