import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { countryModel } from '../Models/country.model';
import { EditCountry } from '../Models/editCountry.model';
import { httpService } from "./httpService";


@Injectable({
    providedIn: 'root'
})
export class dashBoardService{
    constructor(private httpService: httpService){
        this.httpService.getData('https://corona.lmao.ninja/v2/countries').subscribe( (data: countryModel[]) => {
            this.countriesData = data
            this.countriesData.forEach( (data, index) => {
                data.id = index;
            })
            this.countriesSubject.next(this.countriesData)
        })
    }

    //properties
    countriesData: countryModel[]
    countriesSubject = new Subject<countryModel[]>();

    //methods
    //method to get data from API
    getApiData(path: string){
        return this.httpService.getData(path);
    }

    //method to return countriesData
    getCountriesData(){
        this.countriesSubject.next(this.countriesData)
    }

    //method to update CountriesData
    updateCountriesData(data: EditCountry){
      this.countriesData.find(x => x.id === data.id).cases = data.cases;
      this.countriesData.find(x => x.id === data.id).deaths = data.deaths;
      this.countriesData.find(x => x.id === data.id).recovered = data.recovered;
      this.countriesData.find(x => x.id === data.id).tests = data.tests;
      this.countriesSubject.next(this.countriesData);
    }
}