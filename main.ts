import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const direccion1 = new Direccion('Calle Escritor Enrique y Castillo', '23', '1', 'A', '28001', 'Málaga', 'Málaga');
const direccion2 = new Direccion('Avenida de América', '5', '2', 'B', '11205', 'Algeciras', 'Cádiz');
const direccion3 = new Direccion('Calle José Carrión de Mula', '4', 'B', 'C', '29010', 'Málaga', 'Málaga');

const mail1 = new Mail('Personal', 'diegoalarcon@mail.com');
const mail2 = new Mail('Trabajo', 'chemaperez@mail.com');
const mail3 = new Mail('Personal', 'carmencastillo@mail.com');

const telefono1 = new Telefono('Móvil', '123456789');
const telefono2 = new Telefono('Trabajo', '987654321');
const telefono3 = new Telefono('Móvil', '567890123');

const persona1 = new Persona(
  'Diego',
  'Alarcon',
  21,
  '12345678X',
  '03/12/2001',
  'Rojo',
  'Masculino',
  [direccion1],
  [mail1],
  [telefono1],
  ''
);

const persona2 = new Persona(
  'Chema',
  'Pérez',
  21,
  '87654321Y',
  '21/12/2001',
  'Amarillo',
  'Masculino',
  [direccion2],
  [mail2],
  [telefono2],
  ''
);

const persona3 = new Persona(
  'Carmen',
  'Castillo',
  20,
  '78015752M',
  '19/08/2002',
  'Rosa',
  'Femenino',
  [direccion3],
  [mail3],
  [telefono3],
  ''
);

persona1.imprimirpersona()
persona2.imprimirpersona()
persona3.imprimirpersona()

const personaModificar = [persona1, persona2, persona3].find(persona => persona.getDNI() === '12345678X');
if (personaModificar) {
  const nuevaDireccion = new Direccion('Nueva Calle', '123', '4D', '12345678X', 'D', '28002', 'Torremolinos');
  const nuevoMail = new Mail('Trabajo', 'diegotrabajo@mail.com');
  personaModificar.getDirecciones().push(nuevaDireccion);
  personaModificar.getMails().push(nuevoMail);
}

persona1.imprimirpersona()
persona2.imprimirpersona()
persona3.imprimirpersona()