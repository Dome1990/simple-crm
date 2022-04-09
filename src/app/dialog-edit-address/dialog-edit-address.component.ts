import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user!: User;
  loading = false;
  customIdName: string = '';


  constructor(private firestore: AngularFirestore, private dialogRef: MatDialogRef<DialogEditAddressComponent>) { }

  ngOnInit(): void {
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
