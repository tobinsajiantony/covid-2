import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService.Service'
import { EditDataComponent } from '../dash-board/edit-data/edit-data.component';
import { DisplayErrorComponent } from '../display-error/display-error.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //Properties
  userLogined:boolean = false

  //EventMethods
  onLoginSubmit(loginForm: NgForm){
    if(loginForm.valid){
      let credentials:{userName: string, password: string} = loginForm.value
      if(credentials.userName === 'fingent' && credentials.password === 'fingent'){
        this.loginService.updateUserLogined(true);
        this.loginService.setUserToken();
        this.router.navigate(['summary']);
      }
      else{
        const dialogRef = this.dialog.open(DisplayErrorComponent, {
          width: '500px',
          data: 'Invalid Credentials. Please Try Again.'
        });
      }
    }
  }

}
