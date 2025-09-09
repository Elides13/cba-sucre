export interface Programa {
    id: number;
    nombre: string;
    descripcion: string;
    duracion: number; // Duración en horas o días, según el contexto
    fechaInicio: Date;
    fechaFin: Date;
    estado: 'activo' | 'inactivo'; // Estado del programa
}