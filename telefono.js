"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    getTipo() {
        return this.tipo;
    }
    getNumero() {
        return this.numero;
    }
}
exports.Telefono = Telefono;
