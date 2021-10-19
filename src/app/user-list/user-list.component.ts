import { UserDataService } from './../user-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  data: any;

  constructor(private userDataService: UserDataService) {
    // console.log(this.userDataService.getUser());
    this.refresh();
  }

  ngOnInit(): void {}

  refresh() {
    this.userDataService.getUser().subscribe((result) => {
      this.data = result;
    });
  }

  deleteUser(id) {
    // this.userDataService.deleteUser(id);
    this.userDataService.deleteUser(id).subscribe(() => {
      alert('User Deleted');
      this.refresh();
    });
  }
}
