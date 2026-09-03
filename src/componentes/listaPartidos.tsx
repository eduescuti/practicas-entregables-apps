import { StyleSheet, Text, View } from 'react-native';

import { partidos } from '../datos/partidos';
import { colores, espaciado } from '../tema/colores';
import TarjetaPartido from './tarjetaPartido';

/**
 * Tarea 1 — Lista de tarjetas.
 * Recorre los partidos y le pasa a cada TarjetaPartido su contenido por props.
 */
export default function ListaPartidos() {
  return (
    <View>
      <Text style={estilos.encabezado}>Partidos abiertos</Text>
      {partidos.map((partido) => (
        <TarjetaPartido key={partido.id} titulo={partido.titulo} detalle={partido.detalle} />
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  encabezado: {
    marginBottom: espaciado.md,
    color: colores.textoSuave,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});
