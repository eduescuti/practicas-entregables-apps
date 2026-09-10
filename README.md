# Prácticas Entregables — Apps Móviles

Template básico de una app para **organizar partidos de fútbol**, hecho con Expo + React Native +
TypeScript + expo-router. Resuelve las tres tareas de la práctica.

La pantalla principal es **Galería** (la tienda del club): es la primera tab y la ruta a la que
entra la app al abrirse.

## Stack

| Qué | Con qué |
|---|---|
| Runtime / tooling | Expo SDK 57 |
| Framework | React Native 0.86 |
| Lenguaje | TypeScript (`strict: true`) |
| Navegación | expo-router (file-based: Stack + Tabs) |
| Estilos | `StyleSheet` + tokens tipados en `src/tema/` |

## Cómo correrlo

```bash
npm install
npx expo start
```

## Estructura

Todos los archivos `.ts` / `.tsx` usan **camelCase**.

```
app/                        # rutas de expo-router
  _layout.tsx               # Stack raíz (envuelve al grupo de tabs)
  index.tsx                 # ruta "/" → redirige a la primera tab
  (tabs)/
    _layout.tsx             # menú de Tabs: Galería · Contador · Tarjetas · Perfil
    galeria.tsx             # Tarea 3 — pantalla principal (FlatList + TextInput + Modal)
    contador.tsx            # Tarea 2 — contador de goles
    tarjetas.tsx            # Tarea 2 — renderiza la lista de la Tarea 1
    perfil.tsx              # Tarea 2 — nombre editable vía Modal + TextInput
src/
  componentes/
    tarjetaPartido.tsx      # Tarea 1 — tarjeta interactiva (props + useState)
    listaPartidos.tsx       # Tarea 1 — lista de tarjetas
    modalCambiarNombre.tsx  # Modal con TextInput y botón Guardar
    buscadorProductos.tsx   # Tarea 3 — TextInput que filtra en tiempo real
    tarjetaProducto.tsx     # Tarea 3 — ítem de la galería (press / long press)
    modalProducto.tsx       # Tarea 3 — detalle + botones de resizeMode
  datos/
    partidos.ts             # datos de relleno (tipados)
    productos.ts            # Tarea 3 — catálogo (una imagen local + varias por URI)
  tema/
    colores.ts              # colores, espaciado y radios
  utils/
    formato.ts              # formato de precios y normalización para buscar
assets/
  productos/                # imagen local del catálogo (botines.jpg + @2x + @3x)
```

## Tarea 1 — Componentes, estado y estilos

`src/componentes/tarjetaPartido.tsx`

- Recibe su contenido (`titulo`, `detalle`) por **props**.
- Guarda con **`useState`** si el jugador está anotado al partido.
- Al tocarla (**`Pressable`**) cambia **color de fondo y color de texto**.
- El texto queda **centrado en ambos ejes** con Flexbox: el `View` de la tarjeta usa
  `justifyContent: 'center'` + `alignItems: 'center'`, y cada `Text` usa `textAlign: 'center'`.

`src/componentes/listaPartidos.tsx` recorre `src/datos/partidos.ts` y arma la lista.

## Tarea 2 — Navegación e inputs

- **Stack + Tabs + `_layout`**: `app/_layout.tsx` define el Stack raíz y
  `app/(tabs)/_layout.tsx` el menú inferior con las tres pantallas exactas.
- **Contador**: muestra los goles anotados y un botón que incrementa el estado
  (más un botón para reiniciar el marcador).
- **Tarjetas**: importa y renderiza `ListaPartidos`.
- **Perfil**: nombre y apellido por defecto, botón *Cambiar nombre* que abre un `Modal`
  con un `TextInput` y un botón *Guardar* que cierra el modal y actualiza el nombre al instante.

## Tarea 3 — Componentes del core de React Native

Pantalla **Galería** (`app/(tabs)/galeria.tsx`), la tienda del club. Usa los componentes vistos
en la teórica: `View`, `Text`, `Image`, `TextInput`, `Pressable`, `Modal` y `FlatList`.

- **Lista con `FlatList`** en dos columnas: cada ítem muestra **imagen, título y precio**.
- **`TextInput` arriba** (`buscadorProductos.tsx`) que **filtra por título en tiempo real**,
  sin distinguir mayúsculas ni acentos (*fusion* encuentra *Fusión*).
- **Toque simple** sobre un producto: abre un **`Modal`** con el detalle — imagen grande,
  título, precio y descripción.
- **Botones de `resizeMode`** dentro del modal: `contain` (el que trae por defecto), `center`,
  `repeat` y `none`. **No se usan `cover` ni `stretch`**, como pide la consigna. Cada botón
  explica abajo qué hace el modo elegido.
- **Mantener presionado** un producto lo marca como **favorito**: la tarjeta cambia el borde y
  aparece una estrella. Se puede desmarcar igual, o desde el botón del modal.
- **Imágenes de los dos orígenes**: el primer producto usa una **imagen local con `require(...)`**
  y el resto son **imágenes por URI**. Cada tarjeta lleva una etiqueta (`local` / `uri`) para
  que se vea cuál es cuál.

El estado (búsqueda, favoritos y producto abierto) vive en la pantalla; las tarjetas y el modal
solo reciben props.

