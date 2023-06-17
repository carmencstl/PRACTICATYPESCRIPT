import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumpleanos: string;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private mails: Mail[];
  private telefonos: Telefono[];
  private notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getApellidos(): string {
    return this.apellidos;
  }

  public getEdad(): number {
    return this.edad;
  }

  public getDNI(): string {
    return this.dni;
  }

  public getCumpleanos(): string {
    return this.cumpleanos;
  }

  public getColorFavorito(): string {
    return this.colorFavorito;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  public getMails(): Mail[] {
    return this.mails;
  }

  public getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  public getNotas(): string {
    return this.notas;
  }

  public imprimirpersona(): void {
      console.log('Nombre:', this.nombre);
      console.log('Apellidos:', this.apellidos);
      console.log('Edad:', this.edad);
      console.log('DNI:', this.dni);
      console.log('Cumpleaños:', this.cumpleanos);
      console.log('Color favorito:', this.colorFavorito);
      console.log('Sexo:', this.sexo);
      console.log(this.direcciones);
      console.log(this.mails);
      console.log(this.telefonos);
      console.log(this.notas);
  }
}