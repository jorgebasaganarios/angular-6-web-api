import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, HomeComponent, NavbarComponent, NotfoundComponent],
  exports: [HeaderComponent, HomeComponent, NavbarComponent, NotfoundComponent]
})
export class CommonsModule { }
