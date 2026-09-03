/** Un partido de la lista de la pantalla Tarjetas. */
export type Partido = {
  id: string;
  titulo: string;
  detalle: string;
};

/** Datos de relleno del template. En una app real vendrían de un servicio. */
export const partidos: Partido[] = [
  {
    id: 'p1',
    titulo: 'Partido en cancha 5',
    detalle: 'Hoy 20:00 · Fútbol 5 · Faltan 2 jugadores',
  },
  {
    id: 'p2',
    titulo: 'Picado en el Parque Sur',
    detalle: 'Sábado 10:30 · Fútbol 7 · Equipo completo',
  },
  {
    id: 'p3',
    titulo: 'Clásico de los martes',
    detalle: 'Martes 21:15 · Fútbol 5 · Falta 1 arquero',
  },
  {
    id: 'p4',
    titulo: 'Torneo interno — fecha 3',
    detalle: 'Domingo 18:00 · Fútbol 11 · Confirmar asistencia',
  },
  {
    id: 'p5',
    titulo: 'Entrenamiento y penales',
    detalle: 'Jueves 19:00 · Cancha 2 · Abierto a todos',
  },
];
