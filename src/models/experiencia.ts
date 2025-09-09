export interface Experiencia {
    id: number;
    titulo: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin?: Date; // Opcional
    institucion: string;
}