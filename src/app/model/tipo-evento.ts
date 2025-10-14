export class TipoEvento{

    private id: number;
    private nombre: string;

    constructor(
        id: number = 0,
        nombre: string = ''
    ){
        this.id = id;
        this.nombre = nombre;
    }
}