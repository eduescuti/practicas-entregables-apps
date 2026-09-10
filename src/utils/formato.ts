
export function formatearPrecio(precio: number): string {
  const entero = Math.round(precio).toString();
  const conPuntos = entero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `$ ${conPuntos}`;
}

export function normalizarTexto(texto: string): string {
  return texto
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
