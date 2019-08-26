import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosServiceService } from './././alumnos-module/services/alumnos-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AlumnosServiceService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
