"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    getTipo() {
        return this.tipo;
    }
    getDireccion() {
        return this.direccion;
    }
}
exports.Mail = Mail;
