import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {

  constructor(private dialog:MatDialog){}
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    });
  }


  ngOnInit(): void {
  }

}
