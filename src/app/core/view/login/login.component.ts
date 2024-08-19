import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string = '';
  password: string = '';
  loading: boolean = true;
  progress: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startLoading();

    // Redireciona para a home se o token estiver presente
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/home']);
    }
  }

  ngOnDestroy(): void {}

  startLoading(): void {
    setTimeout(() => {
      this.progress = 100;
    }, 0);

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  login() {
    if (this.username === 'adm' && this.password === 'adm') {
      // Mock token
      const mockToken = '1234567890abcdef';
      // Armazena o token no localStorage
      localStorage.setItem('token', mockToken);
      // Navega para a página inicial
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha incorretos');
    }
  }
}
