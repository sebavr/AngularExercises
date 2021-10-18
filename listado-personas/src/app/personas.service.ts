import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
@Injectable()
export class PersonasService{
    personas: Persona[]=[
        new Persona('Juan','Perez'),
        new Persona('María','Salome'),
        new Persona('Jorge','Espinoza')];

        saludar=new EventEmitter<number>();

        constructor(private loggingService: LoggingService){

        }

        personaAgregada(persona:Persona){
            this.loggingService.enviaMensajeAConsola("Enviamos persona: "+persona.nombre+" "+persona.apellido);
            this.personas.push(persona);
          
      
          }
      
}