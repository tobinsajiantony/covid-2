import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { dashBoardService } from './Services/dashBoard.Service';
import { LoginService } from './Services/loginService.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
OnInit {
  constructor(private router: Router, private dashBoardService: dashBoardService
    , private loginService: LoginService){
  }
  ngOnInit(): void {
    this.subscription = this.loginService.userLoginedSubject.subscribe( data => {
      this.showDrawer = data
      this.clickedItem = 'dashboard'
    })
  }

  //Properties
  title = 'covid';
  isExpanded = false
  clickedItem: 'dashboard' | 'countries'
  showDrawer: boolean
  subscription: Subscription

  //Methods
  onDashboardClick(){
    this.clickedItem = 'dashboard'
    this.router.navigate(['summary'])
  }

  onCountriesClick(){
    this.clickedItem = 'countries'
    this.router.navigate(['countries'])
  }

  onLogoutClick(){
    this.loginService.userLogout();
    this.loginService.updateUserLogined(false);
    this.router.navigate(['login']);
  }

}
