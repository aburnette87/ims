import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);

  login(username: string, password: string) {
    const body = {
      user_name: username,
      password: password
    };

    return this.http.get('/sanctum/csrf-cookie').pipe(
      switchMap(() => this.http.post('/api/login', body))
    );
  }
}