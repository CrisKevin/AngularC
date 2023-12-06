import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { LenguajesService } from '../../services/lenguajes.service';
@Component({
  selector: 'app-homedos',
  templateUrl: './homedos.component.html',
  styleUrls: ['./homedos.component.css']
})
export class HomedosComponent {
  name:string = "";
  dificultad:string = "";
  title = 'my-app';
  dataUsers: any = [];
  dataLanguajes: any = [];
  dataSource:any = [];
  materia:string = "";
  sigla:string = "";
  nota:string = "";
  materiaCambio:string = "";
  siglaCambio:string = "";
  notaCambio:string = "";


constructor(private userServices: UsuariosService, private Estodefine: LenguajesService){}

ngOnInit(){

this.userServices.getUsers().subscribe((data) => this.dataUsers = data);


  this.Estodefine.getLenguajes().subscribe((data) => {
  let arrayLenguajes = [data];

  this.dataLanguajes = arrayLenguajes;
  
  for(var key in data)
  {
    var row = {id: key, materia: data[key].materia, sigla: data[key].sigla, nota:data[key].nota}
    this.dataSource.push(row)
  }
  console.log(this.dataSource)
  } ) 

}

guardar(){
  let languaje =  {
    //name:this.name,
    //dificultad: this.dificultad,
    materia: this.materia,
    sigla: this.sigla,
    nota: this.nota

  }
  this.Estodefine.postLenguajes(languaje).subscribe( (data) => {
    //console.log("Su mensaje ha sido enviado exitosamente :D")
    window.location.reload();
  })
}

Eliminar(id:string){
  let aux = confirm("Seguro que quiere borrar este dato, no se podra recuperar")
  if(!aux) return
  this.Estodefine.deleteLenguajes(id).subscribe((data) =>{
     
    
    if(data==null){
      window.location.reload();
    }
  })
}

Actualizando(id:string){

  var aux = confirm("Seguro que quiere cambiar este dato, no se podra guardar el anterior")
  let cuerpo = {
    materia: this.materiaCambio,
    sigla: this.siglaCambio,
    nota: this.notaCambio
  }
  if(aux) {
    this.Estodefine.updateLenguajes(id,cuerpo).subscribe((data) =>{
     window.location.reload();
    
    })
  }else return
  

}
}
