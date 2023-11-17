import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { LenguajesService } from './services/lenguajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
  dataUsers: any = [];
  dataLanguajes: any = [];

constructor(private userServices: UsuariosService, private lenguajesServices: LenguajesService){}

ngOnInit(){

this.userServices.getUsers().subscribe((data) => this.dataUsers = data);
this.lenguajesServices.getLenguajes().subscribe((data) => {
  let arrayLenguajes = [data];

  this.dataLanguajes = arrayLenguajes;
  });
}
}
