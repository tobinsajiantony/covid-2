import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';

import { MatCardModule} from '@angular/material/card'
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule,MatDialogRef } from '@angular/material/dialog';

import { dashBoardService} from '../Services/dashBoard.Service'
import { ToMillionPipe} from '../Services/toMillions.Pipe'
import { countryModel } from '../Models/country.model'
import { EditCountry } from '../Models/editCountry.model'
import { SummaryData } from '../Models/summaryData.model'
import { FormsModule } from '@angular/forms';
import { EditDataComponent } from './edit-data/edit-data.component';
import { SummaryComponent } from './summary/summary.component';
import { MillionsPipe } from './millions.pipe';



@NgModule({
  declarations: [DashBoardComponent, EditDataComponent, SummaryComponent, MillionsPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    DashBoardComponent,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DashBoardModule { }
