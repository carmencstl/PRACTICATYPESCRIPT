"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    getNombre() {
        return this.nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    getEdad() {
        return this.edad;
    }
    getDNI() {
        return this.dni;
    }
    getCumpleanos() {
        return this.cumpleanos;
    }
    getColorFavorito() {
        return this.colorFavorito;
    }
    getSexo() {
        return this.sexo;
    }
    getDirecciones() {
        return this.direcciones;
    }
    getMails() {
        return this.mails;
    }
    getTelefonos() {
        return this.telefonos;
    }
    getNotas() {
        return this.notas;
    }
    imprimirpersona() {
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
exports.Persona = Persona;
