// MODELS — Tipos e interfaces de dominio
// No sabe nada de HTTP ni Express

export interface WelcomeMessage {
  title: string;
  subtitle: string;
  description: string;
  version: string;
  timestamp: string;
}
