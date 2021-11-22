import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente:Cliente={
    nombre:'',
    apellido:'',
    email:'',
    saldo:0
  }

  id!:string;

  constructor(private clientesServicio:ClienteServicio,
    private flashMessage:FlashMessagesService, private router:Router,private route:ActivatedRoute) { }
  
  
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).subscribe(cliente =>{
      this.cliente=cliente;
    });
  }

  eliminar(cliente:Cliente){
  if(confirm('¿Seguro que desea eliminar el cliente?')){
    this.clientesServicio.eliminarCliente(this.cliente);
    this.router.navigate(['/']);
  }
  }
  
  guardar({value,valid}:NgForm){
    console.log(this.route.snapshot.params['id']);
    if(!valid){
    this.flashMessage.show('Por favor llena el formulario adecuadamente',{
  cssClass:'alert-danger', timeout:4000
      });
    }else{
      
      value.id=this.id;
      this.clientesServicio.modificarCliente(value);
      this.router.navigate(['/'])

    }

  }
}
