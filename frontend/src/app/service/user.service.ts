import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://localhost:7183';

  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get<User[]>(this.url + '/api/Users');
  }

  ViewOneUser(id: any) {
    return this.http.get<User>(this.url + '/api/Users/' + id, {});
  }

  addUser(User: User) {
    return this.http.post(this.url + '/api/Users/', User);
  }
  deleteUser(id: any) {
    return this.http.delete(this.url + '/api/Users/' + id, {});
  }

  updateUser(id: string, User: User) {
    return this.http.put(this.url + '/api/Users/' + id, User);
  }
}
