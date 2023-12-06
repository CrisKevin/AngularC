import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string = "";
  password:string = "";



  constructor(private authService:AuthService,private router:Router){}

  ingresar(){

  this.authService.loginconcredenciales(this.email,this.password).then(res=>{
     this.router.navigate(["/homee"])
  }).catch(error=>{
    alert('Usuario no reconocido'),
    console.log(error)
  })

  }

  loginGoogle(){

    this.authService.loginwithgoogle().then(res=>{
      this.router.navigate(["/homee"])
    }).catch(error=>{
      alert('Usuario no reconocido'),
      console.log(error)
    })

  }


}
