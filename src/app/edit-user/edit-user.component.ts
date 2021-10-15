import { UserDataService } from './../user-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userForm;
  constructor(
    private activateRoute: ActivatedRoute,
    private userDataService: UserDataService,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      number: new FormControl(''),
    });

    const data = this.userDataService.getUserById(
      this.activateRoute.snapshot.params['id']
    );
    this.userForm.setValue(data);
  }

  ngOnInit(): void {}

  update() {
    this.userDataService.updateUser(
      this.activateRoute.snapshot.params['id'],
      this.userForm.value
    );
    this.router.navigate(['/dashboard']);
  }
}
