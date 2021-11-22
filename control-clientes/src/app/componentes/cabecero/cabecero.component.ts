import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

 

  constructor(
    private loginService:LoginService,
    private router:Router,
    private configuracionServicio:ConfiguracionServicio
  ) { }
  isLoggedIn: boolean = false;
  loggedInUser!: string | null;
 
  permitirRegistro: boolean = false;


  ngOnInit() {
    this.loginService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLoggedIn=true;
        const userLoggedIn=auth?.email;
        this.loggedInUser=userLoggedIn;

        console.log(auth.email);
      }
      else{
        this.isLoggedIn=false;
      }
    });
    this.configuracionServicio.getConfiguracion().subscribe(
      configuracion=>{
        this.permitirRegistro!=configuracion.permitirRegistro;
      }
    )

  }
  logout(){
    this.loginService.logout();
    this.isLoggedIn=false;
    this.router.navigate(['/login']);
  }

}
