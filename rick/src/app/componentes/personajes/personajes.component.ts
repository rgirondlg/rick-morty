import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../servicios/personajes.service';
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
  constructor( private personajesService:PersonajesService,
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
    //console.log("pagina:",this.pag);
    this.personajesService.getPersonajes(this.pag).subscribe(
      response=>{
        this.personajes=[];
        this.info=[];

        this.info=response["info"];
        this.next=this.info['next'];
        this.prev=this.info['prev'];
       
        this.personajes=response["results"];
        //console.log(this.info);
    });

  }
  siguiente(pag:String){
    this.pagina=pag;
    this.numpag++;
    //this.getPersonajesPages();
    this.router.navigate(['/personajes',this.numpag])
  }
  anterior(pag:String){
    this.pagina=pag;
    this.numpag--;
   // this.getPersonajesPages();
    this.router.navigate(['/personajes',this.numpag])
  }
  ve(idx:any){
    this.router.navigate(['/personaje',idx,this.numpag])
  }



}
