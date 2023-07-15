import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-paginado',
  templateUrl: './paginado.component.html',
  styleUrls: ['./paginado.component.css']
})
export class PaginadoComponent {

  public next : String="";
  public prev : boolean=false;
  public numpag:number=1;
  public pagina:String="";
  constructor( private router:Router){

  }

  siguiente(pag:String){
    this.pagina=pag;
    this.numpag++;
    if(this.numpag>1) this.prev=true;
    this.router.navigate(['/personajes',this.numpag])
  }
  anterior(){
    this.numpag--;
    if(this.numpag<=1) this.prev=false;
    this.router.navigate(['/personajes',this.numpag])
  }
}
