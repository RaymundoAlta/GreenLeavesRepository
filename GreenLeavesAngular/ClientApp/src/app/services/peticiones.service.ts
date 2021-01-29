import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {map} from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url:string;

    constructor(private _http:Http)
    {
        this.url= "http://api.geonames.org/searchJSON?p=Orizaba&username=raymundoalta"
    }

    getPrueba(){
        return "hola mundo ";
    }

    getCiudades(){
        return this._http.get(this.url)
        .pipe(map(res => res.json()))
    }
} 

