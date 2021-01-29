import { Component } from "@angular/core";
import { Usuario } from "./Usuario";
import { Ciudades } from "./Ciudades";
import { PeticionesService } from "../services/peticiones.service"


@Component({
    selector: 'main-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [PeticionesService]
})

export class FormComponent {
    public usuario: Usuario;
    public ciudades: Array<Ciudades>

    constructor(
        private _service: PeticionesService
    ) {
        this.usuario = new Usuario(0, "", "", "", "", "");
        this.ciudades = [
            new Ciudades("Orizaba", "Pueblo Magico de Orizaba"),
            new Ciudades("Cordoba", "Pueblo de la nada de Cordoba"),
            new Ciudades("Omealca", "Villa quieta de Omealca")
        ];
    }

    ngOnInit(){
        console.log(this._service.getPrueba());
    }

    onSubmit() {
        console.log(this.usuario);
    }
}

