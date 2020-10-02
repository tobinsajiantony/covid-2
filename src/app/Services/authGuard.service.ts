import {Injectable} from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './loginService.Service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(private router: Router,private loginService: LoginService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        const token = this.loginService.returnToken();
        if(token != ''){
            return true;
        }
        else{
            this.router.navigate(['login'])
            return false;
        }
    }

}