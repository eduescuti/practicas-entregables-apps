import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colores, espaciado, radios } from '../tema/colores';

/** Contenido de la tarjeta: llega entero por props. */
type PropsTarjetaPartido = {
  titulo: string;
  detalle: string;
};

/**
 * Tarea 1 — Tarjeta interactiva.
 * Recibe su texto por props y guarda con useState si está "anotada".
 * Al tocarla cambia el color de fondo y el color del texto.
 */
export default function TarjetaPartido({ titulo, detalle }: PropsTarjetaPartido) {
  const [anotado, setAnotado] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${titulo}. ${detalle}. ${anotado ? 'Anotado' : 'Sin anotar'}`}
      onPress={() => setAnotado((valorPrevio) => !valorPrevio)}
      style={({ pressed }) => [
        estilos.tarjeta,
        anotado ? estilos.tarjetaAnotada : estilos.tarjetaLibre,
        pressed && estilos.tarjetaPresionada,
      ]}
    >
      {/* Flexbox centra el bloque de texto en ambos ejes dentro de la tarjeta. */}
      <View style={estilos.contenido}>
        <Text style={[estilos.titulo, anotado ? estilos.textoAnotado : estilos.textoLibre]}>
          {titulo}
        </Text>
        <Text style={[estilos.detalle, anotado ? estilos.textoAnotado : estilos.detalleLibre]}>
          {detalle}
        </Text>
        <Text style={[estilos.estado, anotado ? estilos.textoAnotado : estilos.detalleLibre]}>
          {anotado ? '✓ Estás anotado — tocá para bajarte' : 'Tocá para anotarte'}
        </Text>
      </View>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    minHeight: 120,
    borderRadius: radios.md,
    borderWidth: 1,
    marginBottom: espaciado.md,
    paddingHorizontal: espaciado.md,
    // Centrado absoluto en los dos ejes.
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjetaLibre: {
    backgroundColor: colores.superficie,
    borderColor: colores.borde,
  },
  tarjetaAnotada: {
    backgroundColor: colores.primario,
    borderColor: colores.primario,
  },
  tarjetaPresionada: {
    opacity: 0.85,
  },
  contenido: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  detalle: {
    marginTop: espaciado.xs,
    fontSize: 14,
    textAlign: 'center',
  },
  estado: {
    marginTop: espaciado.sm,
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  textoLibre: {
    color: colores.texto,
  },
  detalleLibre: {
    color: colores.textoSuave,
  },
  textoAnotado: {
    color: colores.primarioTexto,
  },
});
