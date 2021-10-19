import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  apiUi = 'YOUR_BACKEND_URL';

  userData = [];

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    // return this.userData;
    return this.http.get(this.apiUi);
  }

  createUser(data: any): Observable<any> {
    // this.userData.push(data);
    return this.http.post(this.apiUi, data);
  }

  getUserById(id: number) {
    // return this.userData[id];
    return this.http.get(`${this.apiUi}/${id}`);
  }

  updateUser(id: number, data: any): Observable<any> {
    // this.userData[id] = data;
    return this.http.put(`${this.apiUi}/${id}`, data);
  }

  deleteUser(id: number): Observable<any> {
    // this.userData.splice(id, 1);
    return this.http.delete(`${this.apiUi}/${id}`);
  }
}
