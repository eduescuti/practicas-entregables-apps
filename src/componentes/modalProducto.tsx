import { useEffect, useState } from 'react';
import type { ImageResizeMode } from 'react-native';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import type { Producto } from '../datos/productos';
import { colores, espaciado, radios } from '../tema/colores';
import { formatearPrecio } from '../utils/formato';


const MODOS: { modo: ImageResizeMode; etiqueta: string; explicacion: string }[] = [
  {
    modo: 'contain',
    etiqueta: 'Contain',
    explicacion: 'La imagen se escala hasta entrar entera en el marco, sin deformarse.',
  },
  {
    modo: 'center',
    etiqueta: 'Center',
    explicacion: 'Queda centrada en su tamaño original; solo se achica si no entra.',
  },
  {
    modo: 'repeat',
    etiqueta: 'Repeat',
    explicacion: 'Se repite en mosaico hasta cubrir el marco, manteniendo su tamaño.',
  },
  {
    modo: 'none',
    etiqueta: 'Sin ajuste',
    explicacion: 'No se redimensiona: se ve en su tamaño real y el marco la recorta.',
  },
];

const MODO_INICIAL: ImageResizeMode = 'contain';

type PropsModalProducto = {
  visible: boolean;
  producto: Producto | null;
  favorito: boolean;
  onAlternarFavorito: () => void;
  onCerrar: () => void;
};


export default function ModalProducto({
  visible,
  producto,
  favorito,
  onAlternarFavorito,
  onCerrar,
}: PropsModalProducto) {
  const [modo, setModo] = useState<ImageResizeMode>(MODO_INICIAL);

  useEffect(() => {
    if (visible) {
      setModo(MODO_INICIAL);
    }
  }, [visible, producto?.id]);

  if (producto === null) {
    return null;
  }

  const explicacion = MODOS.find((opcion) => opcion.modo === modo)?.explicacion ?? '';

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onCerrar}>
      <View style={estilos.fondoOscuro}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cerrar el detalle"
          onPress={onCerrar}
          style={estilos.zonaAfuera}
        />

        <View style={estilos.hoja}>
          <View style={estilos.manija} />

          <View style={estilos.marcoImagen}>
            <Image
              accessibilityIgnoresInvertColors
              accessibilityLabel={`Foto de ${producto.titulo}`}
              source={producto.imagen}
              resizeMode={modo}
              style={estilos.imagenGrande}
            />
          </View>

          <View style={estilos.modos}>
            {MODOS.map((opcion) => {
              const activo = opcion.modo === modo;
              return (
                <Pressable
                  key={opcion.modo}
                  accessibilityRole="button"
                  accessibilityState={{ selected: activo }}
                  accessibilityLabel={`Ver la imagen con ajuste ${opcion.etiqueta}`}
                  onPress={() => setModo(opcion.modo)}
                  style={({ pressed }) => [
                    estilos.chip,
                    activo && estilos.chipActivo,
                    pressed && estilos.presionado,
                  ]}
                >
                  <Text style={[estilos.textoChip, activo && estilos.textoChipActivo]}>
                    {opcion.etiqueta}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={estilos.explicacion}>{explicacion}</Text>

          <View style={estilos.encabezado}>
            <Text style={estilos.titulo}>{producto.titulo}</Text>
            <Text style={estilos.precio}>{formatearPrecio(producto.precio)}</Text>
          </View>

          <Text style={estilos.descripcion}>{producto.descripcion}</Text>

          <View style={estilos.acciones}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={
                favorito ? 'Quitar de favoritos' : 'Marcar como favorito'
              }
              onPress={onAlternarFavorito}
              style={({ pressed }) => [
                estilos.boton,
                estilos.botonSecundario,
                favorito && estilos.botonFavorito,
                pressed && estilos.presionado,
              ]}
            >
              <Text style={estilos.textoBotonSecundario}>
                {favorito ? '★ Favorito' : '☆ Favorito'}
              </Text>
            </Pressable>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Cerrar el detalle"
              onPress={onCerrar}
              style={({ pressed }) => [
                estilos.boton,
                estilos.botonPrimario,
                pressed && estilos.presionado,
              ]}
            >
              <Text style={estilos.textoBotonPrimario}>Cerrar</Text>
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
    justifyContent: 'flex-end',
  },
  zonaAfuera: {
    flex: 1,
  },
  hoja: {
    backgroundColor: colores.superficie,
    borderTopLeftRadius: radios.lg,
    borderTopRightRadius: radios.lg,
    paddingHorizontal: espaciado.lg,
    paddingTop: espaciado.sm,
    paddingBottom: espaciado.xl,
  },
  manija: {
    alignSelf: 'center',
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: colores.borde,
    marginBottom: espaciado.md,
  },
  marcoImagen: {
    height: 230,
    borderRadius: radios.md,
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
    overflow: 'hidden',
  },
  imagenGrande: {
    width: '100%',
    height: '100%',
  },
  modos: {
    marginTop: espaciado.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: espaciado.sm,
  },
  chip: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: espaciado.md,
    borderRadius: radios.sm,
    borderWidth: 1,
    borderColor: colores.borde,
    backgroundColor: colores.fondo,
  },
  chipActivo: {
    backgroundColor: colores.primario,
    borderColor: colores.primario,
  },
  textoChip: {
    color: colores.texto,
    fontSize: 14,
    fontWeight: '600',
  },
  textoChipActivo: {
    color: colores.primarioTexto,
  },
  explicacion: {
    marginTop: espaciado.sm,
    color: colores.textoSuave,
    fontSize: 13,
    lineHeight: 18,
  },
  encabezado: {
    marginTop: espaciado.md,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: espaciado.sm,
  },
  titulo: {
    flex: 1,
    color: colores.texto,
    fontSize: 20,
    fontWeight: '700',
  },
  precio: {
    color: colores.primario,
    fontSize: 18,
    fontWeight: '800',
  },
  descripcion: {
    marginTop: espaciado.sm,
    color: colores.textoSuave,
    fontSize: 14,
    lineHeight: 20,
  },
  acciones: {
    marginTop: espaciado.lg,
    flexDirection: 'row',
    gap: espaciado.sm,
  },
  boton: {
    flex: 1,
    minHeight: 48,
    borderRadius: radios.sm,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: espaciado.md,
  },
  botonPrimario: {
    backgroundColor: colores.primario,
  },
  botonSecundario: {
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  botonFavorito: {
    backgroundColor: colores.acento,
    borderColor: colores.acento,
  },
  presionado: {
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
