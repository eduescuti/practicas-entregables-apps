import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colores, espaciado, radios } from '../tema/colores';

type PropsBuscadorProductos = {
  texto: string;
  onCambiarTexto: (texto: string) => void;
};

export default function BuscadorProductos({ texto, onCambiarTexto }: PropsBuscadorProductos) {
  const hayTexto = texto.length > 0;

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.lupa}>🔎</Text>

      <TextInput
        accessibilityLabel="Buscar producto por título"
        value={texto}
        onChangeText={onCambiarTexto}
        placeholder="Buscar por título…"
        placeholderTextColor={colores.textoSuave}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        style={estilos.entrada}
      />

      {hayTexto && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Borrar la búsqueda"
          onPress={() => onCambiarTexto('')}
          hitSlop={12}
          style={({ pressed }) => [estilos.limpiar, pressed && estilos.limpiarPresionado]}
        >
          <Text style={estilos.textoLimpiar}>✕</Text>
        </Pressable>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.superficie,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: radios.md,
    paddingHorizontal: espaciado.md,
    gap: espaciado.sm,
  },
  lupa: {
    fontSize: 16,
  },
  entrada: {
    flex: 1,
    minHeight: 48,
    color: colores.texto,
    fontSize: 16,
  },
  limpiar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colores.fondo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  limpiarPresionado: {
    opacity: 0.6,
  },
  textoLimpiar: {
    color: colores.textoSuave,
    fontSize: 13,
    fontWeight: '700',
  },
});
