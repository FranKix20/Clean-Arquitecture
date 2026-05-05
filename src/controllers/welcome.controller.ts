// CONTROLLERS — Maneja requests y responses
// Recibe la Request, llama al Service, devuelve la Response

import { Request, Response } from "express";
import { WelcomeService } from "../services/welcome.service";
import { Logger } from "../utils/logger";

const welcomeService = new WelcomeService();
const logger = new Logger("WelcomeController");

export class WelcomeController {
  getPage(_req: Request, res: Response): void {
    logger.info("Sirviendo página principal");
    res.sendFile("index.html", { root: "./public" });
  }

  getApiMessage(_req: Request, res: Response): void {
    logger.info("Sirviendo mensaje de la API");
    const data = welcomeService.getWelcomeMessage();
    res.json({ success: true, data });
  }
}