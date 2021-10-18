import { Component, OnInit} from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
 
})
export class FormularioComponent implements OnInit{

 // @Output() personaCreada=new EventEmitter<Persona>();

 nombreInput:string='';
 apellidoInput:string='';
 constructor(private loggingService:LoggingService,
              private personasService:PersonasService){
                this.personasService.saludar.subscribe(
                  (indice:number) => alert("el indice es: "+indice)
                );

 }
  ngOnInit(){
   
  }

  onAgregarPersona(){
    let persona1=new Persona(this.nombreInput,this.apellidoInput);
    //this.personas.push(persona1);
    //this.loggingService.enviaMensajeAConsola("Enviamos persona: "+persona1.nombre+" "+persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.personaAgregada(persona1);
  }

}
