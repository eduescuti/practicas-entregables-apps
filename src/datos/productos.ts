import type { ImageSourcePropType } from 'react-native';

/** De dónde sale la imagen del producto: del bundle o de internet. */
export type OrigenImagen = 'local' | 'uri';

/** Un producto de la galería. */
export type Producto = {
  id: string;
  titulo: string;
  precio: number;
  descripcion: string;
  imagen: ImageSourcePropType;
  origenImagen: OrigenImagen;
};


export const productos: Producto[] = [
  {
    id: 'botines-fusion',
    titulo: 'Botines Fusión FG',
    precio: 89900,
    descripcion:
      'Botines de campo firme con taco bajo y caña elástica. Livianos, con suela pensada para césped sintético y natural corto.',
    imagen: require('../../assets/productos/botines.jpg'),
    origenImagen: 'local',
  },
  {
    id: 'pelota-match',
    titulo: 'Pelota Match N°5',
    precio: 42500,
    descripcion:
      'Pelota N°5 cosida a máquina, con cámara de butilo que mantiene la presión durante todo el partido. Apta para cancha de 11 y de 7.',
    imagen: { uri: 'https://images.unsplash.com/photo-1552318965-6e6be7484ada?w=600&h=600&fit=crop&q=80' },
    origenImagen: 'uri',
  },
  {
    id: 'camiseta-titular',
    titulo: 'Camiseta titular 2026',
    precio: 64000,
    descripcion:
      'Camiseta oficial de juego en tela deportiva con secado rápido. Incluye el escudo bordado y permite personalizar número y nombre.',
    imagen: { uri: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&h=600&fit=crop&q=80' },
    origenImagen: 'uri',
  },
  {
    id: 'arco-plegable',
    titulo: 'Arco plegable 3 x 2',
    precio: 128000,
    descripcion:
      'Arco de estructura plegable con red reforzada y estacas de anclaje. Se arma sin herramientas y entra en el baúl del auto.',
    imagen: { uri: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=600&fit=crop&q=80' },
    origenImagen: 'uri',
  },
  {
    id: 'kit-escuelita',
    titulo: 'Kit escuelita infantil',
    precio: 57900,
    descripcion:
      'Conjunto de camiseta, short y medias para las categorías infantiles del club. Talles del 6 al 14, con cambio garantizado.',
    imagen: { uri: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&h=600&fit=crop&q=80' },
    origenImagen: 'uri',
  },
  {
    id: 'zapatillas-flash',
    titulo: 'Zapatillas de entrenamiento Flash',
    precio: 96000,
    descripcion:
      'Zapatillas de entrada en calor y trabajo de gimnasio, con amortiguación media y buen agarre en piso duro.',
    imagen: { uri: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop&q=80' },
    origenImagen: 'uri',
  },
  {
    id: 'colchoneta-entrenamiento',
    titulo: 'Colchoneta de entrenamiento',
    precio: 23400,
    descripcion:
      'Colchoneta antideslizante de 10 mm para elongación y trabajo abdominal. Se enrolla y viene con correa para llevarla al club.',
    imagen: { uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&q=80' },
    origenImagen: 'uri',
  },
  {
    id: 'zapatillas-court',
    titulo: 'Zapatillas retro Court',
    precio: 110000,
    descripcion:
      'Modelo urbano de caña baja para usar fuera de la cancha. Cuero sintético, plantilla acolchada y suela de goma.',
    imagen: { uri: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&h=600&fit=crop&q=80' },
    origenImagen: 'uri',
  },
];
