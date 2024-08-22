import { Router } from '@angular/router';
import { AppComponent } from './../../../app.component';
import { Component, Input, isDevMode } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() minHeight: string = '0px';
  isCollapsed = true;
  isCollapsedText = true;
  logoUrl: string = '../../../../assets/image/logo-zf-nav-min.png';
  altura:number = 20;
  submenus: { [key: string]: boolean } = {
    cadastros: false,
    lancamentos: false,
    relatorios: false
  };

  constructor(private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    setTimeout(() => {
      this.isCollapsedText= !this.isCollapsedText;
      this.logoUrl = this.isCollapsed ?'../../../../assets/image/logo-zf-nav-min.png' : '../../../../assets/image/logo-zf-nav.png';
      this.altura = this.isCollapsed ?20 : 40;
    }, 100);
  }

  toggleSubmenu(menu: string) {
    for (let key in this.submenus) {
      if (key !== menu) {
        this.submenus[key] = false;
      }
    }
    this.submenus[menu] = !this.submenus[menu];
  }

  togleCloseMenus(menu: string) {
    for (let key in this.submenus) {
      if (key !== menu) {
        this.submenus[key] = false;
      }
    }
    this.submenus[menu] = !this.submenus[menu];
    this.isCollapsed = true;
    setTimeout(() => {
      this.isCollapsedText= true;
      this.logoUrl = this.isCollapsed ?'../../../../assets/image/logo-zf-nav-min.png' : '../../../../assets/image/logo-zf-nav.png';
      this.altura = this.isCollapsed ?20 : 40;
    }, 100);
  }

  redirectToHome(){
    this.isCollapsed = true;
    this.router.navigate(['/home']);
    setTimeout(() => {
      this.isCollapsedText= true;
      this.logoUrl = this.isCollapsed ?'../../../../assets/image/logo-zf-nav-min.png' : '../../../../assets/image/logo-zf-nav.png';
      this.altura = this.isCollapsed ?20 : 40;
    }, 100);
  }
}
