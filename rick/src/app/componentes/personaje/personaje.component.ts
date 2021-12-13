import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../servicios/personajes.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  public idp:String="";
  public pag:String="";
  public personaje:any={};
  constructor(private personajesService:PersonajesService
    ,private activatedRoute:ActivatedRoute,  private router:Router) { 
      this.activatedRoute.params.subscribe(params=>{
        this.idp=params['id'];
        this.pag=params['pag'];
      })
  }
  getpersonaje(){
    this.personajesService.getPersonaje(this.idp).subscribe(
      response=>{
        //console.log(response);
        this.personaje=response;
      });

     this.getlugar(this.personaje['id'])
  }
  getlugar(id:any){
    //console.log(id);
  }

  ngOnInit(): void {
    this.getpersonaje();
  }
  anterior(pag:any){
    this.router.navigate(['/personajes',pag])
  }

}
