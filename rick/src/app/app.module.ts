import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/genericos/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { FooterComponent } from './componentes/genericos/footer/footer.component';
import { PersonajesService } from './servicios/personajes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonajeComponent } from './componentes/personaje/personaje.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PersonajesComponent,
    FooterComponent,
    PersonajeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
