import {Injectable} from '@angular/core'
import {catchError, tap} from 'rxjs/operators'; 
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DisplayErrorComponent } from '../display-error/display-error.component';

@Injectable({
    providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{

    constructor(public dialog: MatDialog){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    const dialogRef = this.dialog.open(DisplayErrorComponent, {
                        width: '500px',
                        data: 'An HTTP Error Occured ' + err.message
                      });
                }
            }
        ))
    }

}