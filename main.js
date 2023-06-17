"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
const direccion1 = new direccion_1.Direccion('Calle Escritor Enrique y Castillo', '23', '1', 'A', '28001', 'Málaga', 'Málaga');
const direccion2 = new direccion_1.Direccion('Avenida de América', '5', '2', 'B', '11205', 'Algeciras', 'Cádiz');
const direccion3 = new direccion_1.Direccion('Calle José Carrión de Mula', '4', 'B', 'C', '29010', 'Málaga', 'Málaga');
const mail1 = new mail_1.Mail('Personal', 'diegoalarcon@mail.com');
const mail2 = new mail_1.Mail('Trabajo', 'chemaperez@mail.com');
const mail3 = new mail_1.Mail('Personal', 'carmencastillo@mail.com');
const telefono1 = new telefono_1.Telefono('Móvil', '123456789');
const telefono2 = new telefono_1.Telefono('Trabajo', '987654321');
const telefono3 = new telefono_1.Telefono('Móvil', '567890123');
const persona1 = new persona_1.Persona('Diego', 'Alarcon', 21, '12345678X', '03/12/2001', 'Rojo', 'Masculino', [direccion1], [mail1], [telefono1], '');
const persona2 = new persona_1.Persona('Chema', 'Pérez', 21, '87654321Y', '21/12/2001', 'Amarillo', 'Masculino', [direccion2], [mail2], [telefono2], '');
const persona3 = new persona_1.Persona('Carmen', 'Castillo', 20, '78015752M', '19/08/2002', 'Rosa', 'Femenino', [direccion3], [mail3], [telefono3], '');
persona1.imprimirpersona();
persona2.imprimirpersona();
persona3.imprimirpersona();
const personaModificar = [persona1, persona2, persona3].find(persona => persona.getDNI() === '12345678X');
if (personaModificar) {
    const nuevaDireccion = new direccion_1.Direccion('Nueva Calle', '123', '4D', '12345678X', 'D', '28002', 'Torremolinos');
    const nuevoMail = new mail_1.Mail('Trabajo', 'diegotrabajo@mail.com');
    personaModificar.getDirecciones().push(nuevaDireccion);
    personaModificar.getMails().push(nuevoMail);
}
persona1.imprimirpersona();
persona2.imprimirpersona();
persona3.imprimirpersona();
