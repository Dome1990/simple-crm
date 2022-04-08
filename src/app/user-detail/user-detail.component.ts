import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  customIdName = '';
  user: User = new User();


  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customIdName = params['id'];
      this.getUser();
    })
  }


  getUser() {
    this.firestore
      .collection('users')
      .doc(this.customIdName)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
        console.log(user)
      })
  }

  editProfile(){}

  editAddress(){}

}
