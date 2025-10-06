import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.isLoading = true;

    // Simular autenticação (em produção, fazer chamada ao backend)
    setTimeout(() => {
      if (this.username && this.password) {
        // Armazenar token/sessão
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userName', this.username);

        // Redirecionar para dashboard
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Por favor, preencha todos os campos';
        this.isLoading = false;
      }
    }, 800);
  }
}
