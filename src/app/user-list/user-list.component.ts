import { UserDataService } from './../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  data = [];

  constructor(private userDataService: UserDataService) {
    this.data = this.userDataService.getUser();
  }

  ngOnInit(): void {}

  deleteUser(id) {
    this.userDataService.deleteUser(id);
  }
}
