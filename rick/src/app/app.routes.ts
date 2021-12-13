import { Routes, RouterModule, RouterOutlet } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";


import { HomeComponent } from './componentes/home/home.component';
import { PersonajesComponent } from "./componentes/personajes/personajes.component";
import { AboutComponent } from "./componentes/about/about.component";
import { PersonajeComponent } from "./componentes/personaje/personaje.component";

const appRoute: Routes = [
    { path: '', component: HomeComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'personajes/:pag', component: PersonajesComponent },
    { path: 'personaje/:id/:pag', component: PersonajeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: HomeComponent },

];


export const appRoutingPorviders : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute, { relativeLinkResolution: 'legacy' });
