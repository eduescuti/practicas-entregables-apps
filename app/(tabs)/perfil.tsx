import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import ModalCambiarNombre from '../../src/componentes/modalCambiarNombre';
import { colores, espaciado, radios } from '../../src/tema/colores';

const NOMBRE_POR_DEFECTO = 'Eduardo Escuti';

/**
 * Tarea 2 — Pantalla Perfil.
 * Muestra un nombre y apellido por defecto y lo actualiza con lo que se
 * escriba en el Modal al tocar "Guardar".
 */
export default function PantallaPerfil() {
  const [nombre, setNombre] = useState(NOMBRE_POR_DEFECTO);
  const [modalVisible, setModalVisible] = useState(false);

  const iniciales = nombre
    .split(' ')
    .filter((parte) => parte.length > 0)
    .slice(0, 2)
    .map((parte) => parte[0]?.toUpperCase() ?? '')
    .join('');

  const guardarNombre = (nuevoNombre: string) => {
    setNombre(nuevoNombre);
    setModalVisible(false);
  };

  return (
    <View style={estilos.pantalla}>
      <View style={estilos.tarjetaPerfil}>
        <View style={estilos.avatar}>
          <Text style={estilos.textoAvatar}>{iniciales}</Text>
        </View>

        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.posicion}>Mediocampista · Cancha 5 · Nº 8</Text>

        <View style={estilos.estadisticas}>
          <View style={estilos.estadistica}>
            <Text style={estilos.valorEstadistica}>24</Text>
            <Text style={estilos.etiquetaEstadistica}>Partidos</Text>
          </View>
          <View style={estilos.estadistica}>
            <Text style={estilos.valorEstadistica}>11</Text>
            <Text style={estilos.etiquetaEstadistica}>Goles</Text>
          </View>
          <View style={estilos.estadistica}>
            <Text style={estilos.valorEstadistica}>7</Text>
            <Text style={estilos.etiquetaEstadistica}>Asistencias</Text>
          </View>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Cambiar nombre"
        onPress={() => setModalVisible(true)}
        style={({ pressed }) => [estilos.boton, pressed && estilos.botonPresionado]}
      >
        <Text style={estilos.textoBoton}>Cambiar nombre</Text>
      </Pressable>

      <ModalCambiarNombre
        visible={modalVisible}
        nombreActual={nombre}
        onGuardar={guardarNombre}
        onCerrar={() => setModalVisible(false)}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: espaciado.lg,
  },
  tarjetaPerfil: {
    backgroundColor: colores.superficie,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: radios.lg,
    padding: espaciado.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colores.primario,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoAvatar: {
    color: colores.primarioTexto,
    fontSize: 30,
    fontWeight: '800',
  },
  nombre: {
    marginTop: espaciado.md,
    color: colores.texto,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  posicion: {
    marginTop: espaciado.xs,
    color: colores.textoSuave,
    fontSize: 14,
    textAlign: 'center',
  },
  estadisticas: {
    marginTop: espaciado.lg,
    paddingTop: espaciado.md,
    borderTopWidth: 1,
    borderTopColor: colores.borde,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  estadistica: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  valorEstadistica: {
    color: colores.texto,
    fontSize: 20,
    fontWeight: '700',
  },
  etiquetaEstadistica: {
    marginTop: espaciado.xs,
    color: colores.textoSuave,
    fontSize: 12,
  },
  boton: {
    marginTop: espaciado.lg,
    minHeight: 52,
    backgroundColor: colores.primario,
    borderRadius: radios.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonPresionado: {
    opacity: 0.85,
  },
  textoBoton: {
    color: colores.primarioTexto,
    fontSize: 17,
    fontWeight: '700',
  },
});
