/**
 * Tokens de diseño de la app. Ninguna pantalla define colores sueltos:
 * todo sale de acá para mantener una identidad visual consistente.
 * Paleta inspirada en la cancha: verde césped + amarillo tarjeta.
 */
export const colores = {
  fondo: '#F2F6F1',
  superficie: '#FFFFFF',
  texto: '#14261C',
  textoSuave: '#5C6B62',
  borde: '#DCE5DA',
  primario: '#15803D',
  primarioTexto: '#FFFFFF',
  acento: '#FACC15',
  acentoTexto: '#3B2708',
} as const;

export const espaciado = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radios = {
  sm: 8,
  md: 12,
  lg: 20,
} as const;
