import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  color: '#084c61';
  mode: ProgressBarMode = 'determinate';
  valueProgress = 50;
  bufferValue = 75;
  constructor
   (public dialog: MatDialog,
    private dialogRef: MatDialogRef<ProgressBarComponent>) { }
  

  ngOnInit(): void {
    
  if(this.valueProgress == 100){
    console.log('hola');
    this.dialogRef.close();
    
  }
  }
  
}
