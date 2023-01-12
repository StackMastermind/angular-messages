import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

type DialogData = {
  name: string;
  message: string;
};

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  data: DialogData = { name: '', message: '' };
  errors: { name: boolean; message: boolean } = { name: false, message: false };
  constructor(private dialogRef: MatDialogRef<DialogComponent>) {}

  submit() {
    let errorObj = { ...this.errors };
    if (this.data.name) errorObj.name = false;
    else errorObj.name = true;
    if (this.data.message) errorObj.message = false;
    else errorObj.message = true;
    this.errors = errorObj;
    if (!errorObj.name && !errorObj.message) this.dialogRef.close(this.data);
  }
}
