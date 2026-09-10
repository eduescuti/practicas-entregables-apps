import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import BuscadorProductos from '../../src/componentes/buscadorProductos';
import ModalProducto from '../../src/componentes/modalProducto';
import TarjetaProducto from '../../src/componentes/tarjetaProducto';
import { productos } from '../../src/datos/productos';
import { colores, espaciado } from '../../src/tema/colores';
import { normalizarTexto } from '../../src/utils/formato';


export default function PantallaGaleria() {
  const [busqueda, setBusqueda] = useState('');
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [idAbierto, setIdAbierto] = useState<string | null>(null);

  const visibles = useMemo(() => {
    const buscado = normalizarTexto(busqueda);
    if (buscado.length === 0) {
      return productos;
    }
    return productos.filter((producto) => normalizarTexto(producto.titulo).includes(buscado));
  }, [busqueda]);

  const productoAbierto = productos.find((producto) => producto.id === idAbierto) ?? null;

  const alternarFavorito = (id: string) => {
    setFavoritos((previos) =>
      previos.includes(id) ? previos.filter((favorito) => favorito !== id) : [...previos, id],
    );
  };

  return (
    <View style={estilos.pantalla}>
      <BuscadorProductos texto={busqueda} onCambiarTexto={setBusqueda} />

      <Text style={estilos.resumen}>
        {visibles.length} {visibles.length === 1 ? 'producto' : 'productos'}
        {favoritos.length > 0 ? ` · ${favoritos.length} en favoritos` : ''}
      </Text>
      <Text style={estilos.ayuda}>
        Tocá un producto para ver el detalle · Mantenelo presionado para marcarlo favorito
      </Text>

      <FlatList
        data={visibles}
        keyExtractor={(producto) => producto.id}
        numColumns={2}
        columnWrapperStyle={estilos.fila}
        contentContainerStyle={estilos.contenido}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <TarjetaProducto
            producto={item}
            favorito={favoritos.includes(item.id)}
            onPress={() => setIdAbierto(item.id)}
            onLongPress={() => alternarFavorito(item.id)}
          />
        )}
        ListEmptyComponent={
          <View style={estilos.vacio}>
            <Text style={estilos.tituloVacio}>Sin resultados</Text>
            <Text style={estilos.textoVacio}>
              Ningún producto coincide con “{busqueda.trim()}”. Probá con otra palabra.
            </Text>
          </View>
        }
      />

      <ModalProducto
        visible={productoAbierto !== null}
        producto={productoAbierto}
        favorito={productoAbierto !== null && favoritos.includes(productoAbierto.id)}
        onAlternarFavorito={() => {
          if (productoAbierto !== null) {
            alternarFavorito(productoAbierto.id);
          }
        }}
        onCerrar={() => setIdAbierto(null)}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colores.fondo,
    paddingHorizontal: espaciado.md,
    paddingTop: espaciado.md,
  },
  resumen: {
    marginTop: espaciado.md,
    color: colores.textoSuave,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  ayuda: {
    marginTop: espaciado.xs,
    marginBottom: espaciado.md,
    color: colores.textoSuave,
    fontSize: 12,
  },
  fila: {
    justifyContent: 'space-between',
  },
  contenido: {
    gap: espaciado.md,
    paddingBottom: espaciado.xl,
  },
  vacio: {
    paddingVertical: espaciado.xl,
    alignItems: 'center',
  },
  tituloVacio: {
    color: colores.texto,
    fontSize: 17,
    fontWeight: '700',
  },
  textoVacio: {
    marginTop: espaciado.xs,
    color: colores.textoSuave,
    fontSize: 14,
    textAlign: 'center',
  },
});
