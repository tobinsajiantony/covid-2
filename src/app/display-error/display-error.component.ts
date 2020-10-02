import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.scss']
})
export class DisplayErrorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DisplayErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
    this.message = this.data
  }
  //Properties
  message: string

  //eventMethods
  onCloseClicked(){
    this.dialogRef.close()
  }

}
