import { Redirect } from 'expo-router';

/** Ruta "/" del Stack: manda directo a la primera tab. */
export default function Inicio() {
  return <Redirect href="/contador" />;
}
