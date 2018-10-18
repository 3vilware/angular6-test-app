export interface Estudiante {
    // comando: ng generate interface shared/model/estudiante
    id: number;
    nombre: string;
    ciudad: string;
    foto?: string; // ? es opcional
}
