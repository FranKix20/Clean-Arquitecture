// SERVICES — Lógica de negocio pura (sin HTTP)
// No importa nada de Express

import { WelcomeMessage } from "../models/welcome.model";

export class WelcomeService {
  getWelcomeMessage(): WelcomeMessage {
    return {
      title: "Bienvenido",
      subtitle: "Clean Architecture en Node.js + TypeScript",
      description:
        "Cada capa tiene una única responsabilidad. " +
        "Routes, Controllers, Services y Models trabajan juntos " +
        "de forma ordenada y completamente desacoplada.",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    };
  }
}
