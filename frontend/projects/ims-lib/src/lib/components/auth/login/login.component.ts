import { AuthService } from '../../../services/auth.service'
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ims-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  private formBuilder = inject(UntypedFormBuilder);
  private authService = inject(AuthService);

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        console.log('Login response:', response);
      },
      error: (error) => {
        console.error('Login request failed:', error);
      },
      complete: () => {
        console.log('Login request completed');
      }
    })
  }
}