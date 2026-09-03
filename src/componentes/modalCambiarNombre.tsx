import { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colores, espaciado, radios } from '../tema/colores';

type PropsModalCambiarNombre = {
  visible: boolean;
  nombreActual: string;
  onGuardar: (nuevoNombre: string) => void;
  onCerrar: () => void;
};

/**
 * Tarea 2 — Modal de la pantalla Perfil.
 * Tiene un TextInput para el nombre y apellido nuevos y un botón "Guardar"
 * que cierra el modal y avisa al padre para que actualice la pantalla.
 */
export default function ModalCambiarNombre({
  visible,
  nombreActual,
  onGuardar,
  onCerrar,
}: PropsModalCambiarNombre) {
  const [texto, setTexto] = useState(nombreActual);

  // Cada vez que se abre el modal arranca con el nombre que se ve en pantalla.
  useEffect(() => {
    if (visible) {
      setTexto(nombreActual);
    }
  }, [visible, nombreActual]);

  const nombreValido = texto.trim().length > 0;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCerrar}>
      <View style={estilos.fondoOscuro}>
        <View style={estilos.tarjetaModal}>
          <Text style={estilos.titulo}>Cambiar nombre</Text>
          <Text style={estilos.ayuda}>Así te van a ver el resto de los jugadores.</Text>

          <TextInput
            accessibilityLabel="Nuevo nombre y apellido"
            value={texto}
            onChangeText={setTexto}
            placeholder="Nombre y apellido"
            placeholderTextColor={colores.textoSuave}
            autoCapitalize="words"
            autoFocus
            style={estilos.entrada}
          />

          <View style={estilos.acciones}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Cancelar"
              onPress={onCerrar}
              style={({ pressed }) => [
                estilos.boton,
                estilos.botonSecundario,
                pressed && estilos.botonPresionado,
              ]}
            >
              <Text style={estilos.textoBotonSecundario}>Cancelar</Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Guardar nuevo nombre"
              disabled={!nombreValido}
              onPress={() => onGuardar(texto.trim())}
              style={({ pressed }) => [
                estilos.boton,
                estilos.botonPrimario,
                !nombreValido && estilos.botonDeshabilitado,
                pressed && estilos.botonPresionado,
              ]}
            >
              <Text style={estilos.textoBotonPrimario}>Guardar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  fondoOscuro: {
    flex: 1,
    backgroundColor: 'rgba(10, 25, 17, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: espaciado.lg,
  },
  tarjetaModal: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: colores.superficie,
    borderRadius: radios.lg,
    padding: espaciado.lg,
  },
  titulo: {
    color: colores.texto,
    fontSize: 20,
    fontWeight: '700',
  },
  ayuda: {
    marginTop: espaciado.xs,
    color: colores.textoSuave,
    fontSize: 14,
  },
  entrada: {
    marginTop: espaciado.md,
    minHeight: 48,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: radios.sm,
    paddingHorizontal: espaciado.md,
    color: colores.texto,
    fontSize: 16,
  },
  acciones: {
    marginTop: espaciado.lg,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: espaciado.sm,
  },
  boton: {
    minHeight: 44,
    minWidth: 110,
    borderRadius: radios.sm,
    paddingHorizontal: espaciado.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonPrimario: {
    backgroundColor: colores.primario,
  },
  botonSecundario: {
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  botonDeshabilitado: {
    opacity: 0.45,
  },
  botonPresionado: {
    opacity: 0.85,
  },
  textoBotonPrimario: {
    color: colores.primarioTexto,
    fontSize: 15,
    fontWeight: '700',
  },
  textoBotonSecundario: {
    color: colores.texto,
    fontSize: 15,
    fontWeight: '600',
  },
});
