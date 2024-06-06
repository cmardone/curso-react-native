export class Formatter {
  public static currency(value: number): string {
    return new Intl.NumberFormat('es-US', {
      currency: 'USD',
      style: 'currency',
    }).format(value);
  }
}
