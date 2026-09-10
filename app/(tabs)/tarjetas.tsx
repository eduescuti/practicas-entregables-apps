import { ScrollView, StyleSheet } from 'react-native';

import ListaPartidos from '../../src/componentes/listaPartidos';
import { colores, espaciado } from '../../src/tema/colores';


export default function PantallaTarjetas() {
  return (
    <ScrollView style={estilos.pantalla} contentContainerStyle={estilos.contenido}>
      <ListaPartidos />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  contenido: {
    padding: espaciado.lg,
  },
});
