import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-walk-through',
  templateUrl: './walk-through.component.html',
  styleUrls: ['./walk-through.component.scss']
})
export class WalkThroughComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WalkThroughComponent>) { }

  ngOnInit() {
  
  }
  navigate() {
    this.dialogRef.close();
    }
    
}
