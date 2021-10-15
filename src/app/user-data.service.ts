import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userData = [];

  constructor() {}

  getUser() {
    return this.userData;
  }

  createUser(data: any) {
    this.userData.push(data);
  }

  getUserById(id: number) {
    return this.userData[id];
  }

  updateUser(id: number, data: any) {
    this.userData[id] = data;
  }

  deleteUser(id: number) {
    this.userData.splice(id, 1);
  }
}
