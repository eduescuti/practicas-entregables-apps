import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colores, espaciado, radios } from '../../src/tema/colores';


export default function PantallaContador() {
  const [goles, setGoles] = useState(0);

  return (
    <View style={estilos.pantalla}>
      <View style={estilos.marcador}>
        <Text style={estilos.etiqueta}>Goles anotados</Text>
        <Text style={estilos.numero}>{goles}</Text>
        <Text style={estilos.ayuda}>
          {goles === 0
            ? 'Todavía no marcaste en este partido'
            : `Llevás ${goles} ${goles === 1 ? 'gol' : 'goles'} en la fecha`}
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Sumar un gol"
        onPress={() => setGoles((valorPrevio) => valorPrevio + 1)}
        style={({ pressed }) => [estilos.boton, pressed && estilos.botonPresionado]}
      >
        <Text style={estilos.textoBoton}>⚽ Anotar gol</Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Reiniciar el marcador"
        onPress={() => setGoles(0)}
        style={({ pressed }) => [estilos.botonSecundario, pressed && estilos.botonPresionado]}
      >
        <Text style={estilos.textoBotonSecundario}>Reiniciar marcador</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colores.fondo,
    padding: espaciado.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marcador: {
    width: '100%',
    backgroundColor: colores.superficie,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: radios.lg,
    paddingVertical: espaciado.xl,
    paddingHorizontal: espaciado.lg,
    marginBottom: espaciado.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  etiqueta: {
    color: colores.textoSuave,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  numero: {
    marginVertical: espaciado.sm,
    color: colores.primario,
    fontSize: 76,
    fontWeight: '800',
    textAlign: 'center',
  },
  ayuda: {
    color: colores.textoSuave,
    fontSize: 14,
    textAlign: 'center',
  },
  boton: {
    width: '100%',
    minHeight: 52,
    backgroundColor: colores.primario,
    borderRadius: radios.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonSecundario: {
    width: '100%',
    minHeight: 44,
    marginTop: espaciado.sm,
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
  textoBotonSecundario: {
    color: colores.textoSuave,
    fontSize: 14,
    fontWeight: '600',
  },
});
