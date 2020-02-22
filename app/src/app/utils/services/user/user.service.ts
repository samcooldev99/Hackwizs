import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  createUser(data: any) {
    return this.http.post(`${environment.BASE_URL}api/v1/users/`, data);
  }

  login(data: any) {
    const csrfToken = this.cookieService.get('csrftoken');
    const headers = new HttpHeaders({
      'X-CSRFToken': csrfToken
    });
    return this.http.post(`${environment.BASE_URL}api/auth/`, data, { headers });
  }

  updateUserInfo(userID: string, data: any) {
    return this.http.post(`${environment.BASE_URL}api/v1/users/${userID}`, data);
  }

  uploadImage(file: File) {
    const form = new FormData();
    form.append('file', file);
    return this.http.post(`${environment.BASE_URL}api/v1/upload/`, form, { reportProgress: true, observe: 'events' });
  }
}
