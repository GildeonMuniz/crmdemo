import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container" *ngIf="!isLoginPage">
      <nav class="top-navbar">
        <div class="navbar-brand">
          <img src="assets/images/logotipo_funchal.jpg" alt="Funchal Consórcio" class="logo" />
        </div>
        <ul class="nav-menu">
          <li>
            <a routerLink="/dashboard" routerLinkActive="active">
              <span class="icon">📊</span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a routerLink="/leads" routerLinkActive="active">
              <span class="icon">👥</span>
              <span>Leads</span>
            </a>
          </li>
          <li>
            <a routerLink="/analytics" routerLinkActive="active">
              <span class="icon">📈</span>
              <span>Analytics</span>
            </a>
          </li>
        </ul>
        <div class="user-info">
          <div class="user-details">
            <div class="user-name">{{ userName || 'Admin User' }}</div>
            <div class="user-role">Gerente</div>
          </div>
          <div class="user-avatar">👤</div>
          <button class="logout-btn" (click)="logout()">Sair</button>
        </div>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
    <div *ngIf="isLoginPage">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    .top-navbar {
      background: linear-gradient(90deg, #4a9fd8 0%, #6bb5e6 100%);
      color: white;
      display: flex;
      align-items: center;
      padding: 0 30px;
      height: 70px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar-brand {
      display: flex;
      align-items: center;

      .logo {
        height: 50px;
        width: auto;
        object-fit: contain;
        background: white;
        padding: 5px 15px;
        border-radius: 8px;
      }
    }

    .nav-menu {
      flex: 1;
      list-style: none;
      display: flex;
      gap: 8px;
      padding: 0;
      margin: 0 0 0 50px;

      li {
        margin: 0;
      }

      a {
        display: flex;
        align-items: center;
        padding: 12px 20px;
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        transition: all 0.3s;
        gap: 8px;
        font-size: 15px;
        border-radius: 8px;

        .icon {
          font-size: 18px;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }

        &.active {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
      }
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 15px;

      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }

      .user-details {
        text-align: right;

        .user-name {
          font-weight: 600;
          font-size: 14px;
        }

        .user-role {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
      }

      .logout-btn {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.3s;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      }
    }

    .main-content {
      flex: 1;
      overflow-y: auto;
      background: #f5f7fa;
    }
  `]
})
export class AppComponent {
  title = 'CRM Consórcio';
  userName = '';
  isLoginPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
      this.userName = localStorage.getItem('userName') || '';
    });
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}
