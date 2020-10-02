import { AfterViewChecked, ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { countryModel } from 'src/app/Models/country.model';
import { dashBoardService } from 'src/app/Services/dashBoard.Service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDataComponent>, private dashBoardService: dashBoardService,
    @Inject(MAT_DIALOG_DATA) public data: countryModel) { }


  ngOnInit(): void {
    this.case = this.data.cases;
    this.death = this.data.deaths;
    this.recover = this.data.recovered;
    this.test = this.data.tests
    this.ids = this.data.id
  }

  //Properties
  @ViewChild('editDataForm', {static: false}) editDataForm : NgForm
  case
  death
  recover
  test
  ids

  //Event Methods
  onEditFormSubmit(editDataForm: NgForm){
    if(editDataForm.valid){
      this.dashBoardService.updateCountriesData(editDataForm.value);
      this.dialogRef.close();
    }
  }

  onCloseClicked(){
    this.dialogRef.close();
  }

}
