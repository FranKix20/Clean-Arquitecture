// UTILS — Herramientas reutilizables en toda la app

export class Logger {
  private context: string;

  constructor(context: string) {
    this.context = context;
  }

  info(message: string): void {
    console.log(`\x1b[36m[INFO]\x1b[0m \x1b[33m[${this.context}]\x1b[0m ${message}`);
  }

  error(message: string): void {
    console.error(`\x1b[31m[ERROR]\x1b[0m \x1b[33m[${this.context}]\x1b[0m ${message}`);
  }

  warn(message: string): void {
    console.warn(`\x1b[33m[WARN]\x1b[0m \x1b[33m[${this.context}]\x1b[0m ${message}`);
  }
}
