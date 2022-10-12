import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
 
import { ConfirmPasswordValidator } from '../CustomValidation/ConfirmPassword.Validators';
import { UsersService } from '../services/users.service';
import { User } from './../Classes/users';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  usermodel:User=new User("","","","","","");

  constructor( private userservice:UsersService,private router:Router) { }

  ngOnInit(): void {

  }
  RegisterForm=new FormGroup({
    fristname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*'),Validators.minLength(3)]),
    lastname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z].*'),Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern("[0-9].*"),Validators.minLength(10),Validators.maxLength(12)]),
    password:new FormControl('',[ Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    confirmpassword:new FormControl(''),
    //
    // rpw:new FormControl('')

  },{validators:[ConfirmPasswordValidator]}
   );
  // submit button
  submitData(){

    console.log(this.RegisterForm.value);
    // new
    this.userservice.postuser(this.usermodel).subscribe(
      data=>{
        // console.log("sucess",data);
        alert("Registeration is Successfull")
        this.RegisterForm.reset();
        this.router.navigate([""])
      },
      error=>{
        console.log("Error",error);
      }


    )
    // if(this.RegisterForm.valid){
    //   alert(`Thank you ${this.RegisterForm.value.fristname}`);

    // }
  }
  get fristname():FormControl{
    return this.RegisterForm.get('fristname') as FormControl;
  }
  get lastname():FormControl{
    return this.RegisterForm.get('lastname')as FormControl;
  }
  get email():FormControl{
    return this.RegisterForm.get('email')as FormControl;
  }
  get phone():FormControl{
    return this.RegisterForm.get('phone')as FormControl;
  }
  get password():FormControl {
    return this.RegisterForm.get('password')as FormControl;
  }
  //  get confirmpassword() {
  //    return this.RegisterForm.get('confirmpassword');
  //  }
  // onPasswordChange() {
  //   if (this.confirmpassword.value == this.password.value) {
  //     this.confirmpassword.setErrors(null);
  //   } else {
  //     this.confirmpassword.setErrors({ mismatch: true });
  //   }
  // }
  

}
