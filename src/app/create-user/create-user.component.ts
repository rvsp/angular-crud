import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      number: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.userForm.value) {
      this.userDataService.createUser(this.userForm.value);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please fill all the fields');
    }
  }
}
