import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {


  user!: User;
  loading = false;
  birthDate!: Date;
  customIdName: string = '';

  constructor(private firestore: AngularFirestore, private dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  ngOnInit(): void {
    this.birthDate = new Date(this.user.birthDate);
  }

  save() {
    this.loading = true;
    this.firestore
    .collection('users')
    .doc(this.customIdName)
    .update(this.user.toJSON())
    .then(() =>{
      this.loading = false;
      this.dialogRef.close();
    })
  }
}
