import {Injectable} from '@angular/core'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  //Properties
  userLogined:boolean = false
  userLoginedSubject = new Subject<boolean>();
  token = ''

  //Methods
  updateUserLogined(value: boolean){
    this.userLogined = value;
    this.userLoginedSubject.next(this.userLogined);
  }

  setUserToken(){
    this.token = '12345566644'
  }

  userLogout(){
      this.token = ''
  }

  returnToken(){
      return this.token;
  }
}