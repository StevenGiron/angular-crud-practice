export class Nevado{
    id?: string;
    nombre: string;
    ubicacion: string;
    continente: string;
    altitud: number;
    actividad_volcanica: string;
    alt_img: string;

    constructor(
        id: string,
        nombre: string,
        ubicacion: string,
        continente: string,
        altitud: number,
        actividad_volcanica: string,
        alt_img: string){

        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.continente = continente;
        this.altitud = altitud;
        this. actividad_volcanica = actividad_volcanica;
        this.alt_img = alt_img;
    }
}