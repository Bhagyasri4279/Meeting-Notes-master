import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl,  FormGroup , FormBuilder,Validators,FormGroupDirective} from '@angular/forms';

export interface Employee {
  name: string;
}

@Component({
  selector: 'app-meeting-view',
  templateUrl: './meeting-view.component.html',
  styleUrls: ['./meeting-view.component.css']
})
export class MeetingViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MeetingViewComponent>) { }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Employees: Employee[] = [
    {name: 'Bhagyasri'},
    {name: 'Annapurna'},
    {name: 'Triveni'},
    {name: 'Navya'},
    {name: 'Lavanya'},
    {name: 'Raghu'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add attendee
    if ((value || '').trim()) {
      this.Employees.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(emp: Employee): void {
    const index = this.Employees.indexOf(emp);

    if (index >= 0) {
      this.Employees.splice(index, 1);
    }
  }



  FormData={'name':'','id':'','mobile':'','email':'','project':''}

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
