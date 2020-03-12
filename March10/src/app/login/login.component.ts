import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users: User[];
  currentUser: User;
  //users : USERS;
  constructor(private service:UserService, private formBuilder: FormBuilder, private router:Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      //id:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    });
    this.service.getAllUsers().subscribe(u => {
      this.users = u;
    });
  }
  isValid(){
    let admin_userName="admin@gmail.com";
    let admin_password="admin123";
    let userName = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    if((userName == admin_userName) && (password == admin_password)){
      this.router.navigate(['admin']);
    }else{
      if( this.login(userName, password)){
        if(this.service.isActivated(this.currentUser)){
          localStorage.removeItem('userId');
          localStorage.setItem('userId',this.currentUser.id.toString());
          this.router.navigate(['userlanding']);
        }else{
          alert("please activate your account to login ");
        } 
        }else{ 
          alert(" Invalid username or Password");
          this.loginForm.reset();
        }
      }
    }
    login(userName:string, password: string){
      for(let user of this.users ){
        if((userName == user.username) && (password == user.password)){
          this.currentUser= user;
          
          //if(this.auth.authenticate(username,password));
          return true;
        }
      }
      return false;
    }
  onSubmit(){
    console.log(this.loginForm.value);
  }

}
