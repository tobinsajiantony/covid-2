import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { countryModel } from 'src/app/Models/country.model';
import { dashBoardService } from 'src/app/Services/dashBoard.Service';
import { EditDataComponent } from '../edit-data/edit-data.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor(private dashBoardService: dashBoardService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.subscription = this.dashBoardService.countriesSubject.subscribe((data: countryModel[]) => {
    //   this.country = data;
    //   console.log(this.country);
    //   this.pageSize = this.country.length
    //   this.dataSource = this.pagenateData(this.country, 0);
    // })
    this.dashBoardService.getCountriesData();
  }

  //Properties
  country: countryModel[]
  dataSource: countryModel[]
  pagenatorValue: number = 30
  pageStartValue: number
  pageEndValue: number
  pageSize: number
  filtered: countryModel[]
  mymodel
  @ViewChild('paginato', { static: true }) paginator: MatPaginator
  searchText: string
  subscription: Subscription = this.dashBoardService.countriesSubject.subscribe((data: countryModel[]) => {
    this.country = data;
    this.pageSize = this.country.length
    this.dataSource = this.pagenateData(this.country, 0);
    this.searchText = ''
  })

  //Methods
  pagenateData(data: countryModel[], pageIndex: number) {
    this.pageStartValue = pageIndex * this.pagenatorValue
    this.pageEndValue = ((pageIndex + 1) * this.pagenatorValue);
    return data.slice(this.pageStartValue, this.pageEndValue);
  }

  //EventMethods
  pagenatorEvent(page: PageEvent) {
    if (this.searchText === '') {
      this.dataSource = this.pagenateData(this.country, page.pageIndex);
    }
    else {
      this.dataSource = this.pagenateData(this.filtered, page.pageIndex);
    }
  }

  sortSelectionChange(value: string) {
    if (value === 'CountryName') {
      this.country = this.country.sort((a, b) => {
        if (a.country > b.country)
          return 1;
        else if (a.country < b.country)
          return -1;
        else
          return 0;
      })
    }
    else if (value === 'NumberOfCases') {
      this.country = this.country.sort((a, b) => {
        return a.cases - b.cases
      })
    }
    else if (value === 'NumberOfDeaths') {
      this.country = this.country.sort((a, b) => {
        return a.deaths - b.deaths
      })
    }
    else if (value === 'NumberOfRecovered') {
      this.country = this.country.sort((a, b) => {
        return a.recovered - b.recovered
      })
    }
    this.searchText = ''
    this.dataSource = this.pagenateData(this.country, 0);
    this.paginator.length = this.country.length
    this.paginator.firstPage();
  }

  onSearchChange(text: string) {
    this.filtered = this.country.filter((value) => {
      return value.country.toLowerCase().includes(text.toLowerCase())
    })
    this.dataSource = this.pagenateData(this.filtered, 0);
    this.paginator.length = this.filtered.length
  }

  //When the edit icon is clicked in the country card.
  onEditButtonClick(countryData: countryModel) {
    const dialogRef = this.dialog.open(EditDataComponent, {
      width: '500px',
      data: countryData
    });
  }

}
