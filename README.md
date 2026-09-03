# Prácticas Entregables — Apps Móviles

Template básico de una app para **organizar partidos de fútbol**, hecho con Expo + React Native +
TypeScript + expo-router. Resuelve las dos tareas de la práctica.

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
npx install
npx expo start
```

## Estructura

Todos los archivos `.ts` / `.tsx` usan **camelCase**.

```
app/                        # rutas de expo-router
  _layout.tsx               # Stack raíz (envuelve al grupo de tabs)
  index.tsx                 # ruta "/" → redirige a la primera tab
  (tabs)/
    _layout.tsx             # menú de Tabs: Contador · Tarjetas · Perfil
    contador.tsx            # Tarea 2 — contador de goles
    tarjetas.tsx            # Tarea 2 — renderiza la lista de la Tarea 1
    perfil.tsx              # Tarea 2 — nombre editable vía Modal + TextInput
src/
  componentes/
    tarjetaPartido.tsx      # Tarea 1 — tarjeta interactiva (props + useState)
    listaPartidos.tsx       # Tarea 1 — lista de tarjetas
    modalCambiarNombre.tsx  # Modal con TextInput y botón Guardar
  datos/
    partidos.ts             # datos de relleno (tipados)
  tema/
    colores.ts              # colores, espaciado y radios
assets/
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
