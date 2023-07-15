import { Routes, RouterModule, RouterOutlet } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { PersonajesComponent } from "./personajes/personajes.component";
import { PersonajeComponent } from "./personaje/personaje.component";

const appRoute: Routes = [
    { path: '', component: PersonajesComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'personajes/:pag', component: PersonajesComponent },
    { path: 'personaje/:id/:pag', component: PersonajeComponent },
    { path: '**', component: PersonajesComponent },

];


export const appRoutingPorviders : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);
