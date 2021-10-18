import { Egreso } from "./egreso.model";


export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("Renta Depto",800),
        new Egreso("Ropa",200),
        new Egreso("Comida",50)
    ];

    eliminar(egreso:Egreso){
        const indice:number=this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}