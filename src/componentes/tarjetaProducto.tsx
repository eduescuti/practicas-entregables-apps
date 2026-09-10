import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import type { Producto } from '../datos/productos';
import { colores, espaciado, radios } from '../tema/colores';
import { formatearPrecio } from '../utils/formato';

type PropsTarjetaProducto = {
  producto: Producto;
  favorito: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export default function TarjetaProducto({
  producto,
  favorito,
  onPress,
  onLongPress,
}: PropsTarjetaProducto) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${producto.titulo}. ${formatearPrecio(producto.precio)}.${favorito ? ' Marcado como favorito.' : ''
        } Tocá para ver el detalle, mantené presionado para marcarlo como favorito.`}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={350}
      style={({ pressed }) => [
        estilos.tarjeta,
        favorito && estilos.tarjetaFavorita,
        pressed && estilos.tarjetaPresionada,
      ]}
    >
      <View style={estilos.marcoImagen}>
        <Image
          accessibilityIgnoresInvertColors
          source={producto.imagen}
          resizeMode="contain"
          style={estilos.imagen}
        />

        <View style={estilos.etiquetaOrigen}>
          <Text style={estilos.textoOrigen}>
            {producto.origenImagen === 'local' ? 'local' : 'uri'}
          </Text>
        </View>

        {favorito && (
          <View style={estilos.estrella}>
            <Text style={estilos.textoEstrella}>★</Text>
          </View>
        )}
      </View>

      <Text numberOfLines={2} style={estilos.titulo}>
        {producto.titulo}
      </Text>
      <Text style={estilos.precio}>{formatearPrecio(producto.precio)}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    width: '48%',
    backgroundColor: colores.superficie,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: radios.md,
    padding: espaciado.sm,
  },
  tarjetaFavorita: {
    borderColor: colores.acento,
    borderWidth: 2,
  },
  tarjetaPresionada: {
    opacity: 0.85,
  },
  marcoImagen: {
    height: 128,
    borderRadius: radios.sm,
    backgroundColor: colores.fondo,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  etiquetaOrigen: {
    position: 'absolute',
    top: espaciado.xs,
    left: espaciado.xs,
    paddingHorizontal: espaciado.sm,
    paddingVertical: 2,
    borderRadius: radios.sm,
    backgroundColor: 'rgba(20, 38, 28, 0.72)',
  },
  textoOrigen: {
    color: colores.primarioTexto,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  estrella: {
    position: 'absolute',
    top: espaciado.xs,
    right: espaciado.xs,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: colores.acento,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoEstrella: {
    color: colores.acentoTexto,
    fontSize: 14,
    fontWeight: '800',
  },
  titulo: {
    marginTop: espaciado.sm,
    color: colores.texto,
    fontSize: 15,
    fontWeight: '700',
  },
  precio: {
    marginTop: espaciado.xs,
    color: colores.primario,
    fontSize: 15,
    fontWeight: '700',
  },
});
