import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicio/api.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes:any[]=[];
  public info : any={};
  public data : Array<any> = [];
  public pagina:String="";
  public next : String="";
  public prev : String="";
  public numpag:number=1;
  public pag:any="";
  constructor( private personajesService:ApiService,
    private router:Router,private activatedRoute:ActivatedRoute) {
      this.activatedRoute.params.subscribe(params=>{
        
        if(!isNaN(params['pag'])){
          this.pag=params['pag'];
          this.numpag=this.pag;
          this.getPersonajesPages();
        }
        
      })

   }

  ngOnInit(): void {
   this.getPersonajesPages();
  }
  getPersonajesPages(){
    this.personajesService.getPersonajes(this.pag).subscribe(
      response=>{
        this.personajes=[];
        this.info=[];

        this.info=response["info"];
        this.next=this.info['next'];
        this.prev=this.info['prev'];
       
        this.personajes=response["results"];
    });

  }
  ve(idx:any){
    this.router.navigate(['/personaje',idx,this.numpag])
  }



}
