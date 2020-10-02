import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class httpService{
   constructor(private http: HttpClient){}

   //methods
   //method to get data from API.
   getData(path: string){
     return this.http.get(path);
   }
}