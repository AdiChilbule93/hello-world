import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatDatepickerModule, MatExpansionModule, MatProgressSpinnerModule,
  MatNativeDateModule, MatTooltipModule, MatChipsModule, MatSlideToggleModule,
  MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatTabsModule, MatCheckboxModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule, MatExpansionModule,
    MatNativeDateModule, MatTooltipModule, MatProgressSpinnerModule,
    MatSliderModule, MatTabsModule, MatChipsModule, MatSlideToggleModule,
    MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatRadioModule,
    MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule, MatExpansionModule,
    MatNativeDateModule, MatTooltipModule, MatProgressSpinnerModule,
    MatSliderModule, MatTabsModule, MatChipsModule, MatSlideToggleModule,
    MatSidenavModule, MatIconModule, MatListModule, MatToolbarModule, MatRadioModule, MatMenuModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule
  ]
})

// tslint:disable-next-line:eofline
export class AppMaterialModule { }