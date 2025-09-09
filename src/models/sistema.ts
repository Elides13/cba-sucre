export interface Sistema {
    id: number;
    nombre: string;
    descripcion?: string;
    estado: boolean;
    creadoEn: Date;
    actualizadoEn?: Date;
}

export class SistemaModel implements Sistema {
    id: number;
    nombre: string;
    descripcion?: string;
    estado: boolean;
    creadoEn: Date;
    actualizadoEn?: Date;

    constructor(data: Sistema) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.descripcion = data.descripcion;
        this.estado = data.estado;
        this.creadoEn = data.creadoEn;
        this.actualizadoEn = data.actualizadoEn;
    }
}