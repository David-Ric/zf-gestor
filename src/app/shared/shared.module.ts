import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeIconsModule } from './font-awesome-icons/font-awesome-icons.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';



@NgModule({
  declarations: [
    AppHeaderComponent,
    SidebarComponent,
    FooterComponent,
    MenuMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeIconsModule,
    NgApexchartsModule
  ],
  exports: [
    AppHeaderComponent,
    SidebarComponent,
    FooterComponent,
    FontAwesomeIconsModule,
    NgApexchartsModule
  ]
})
export class SharedModule { }
