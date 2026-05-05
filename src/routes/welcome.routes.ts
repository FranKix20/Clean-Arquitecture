// ROUTES — Solo define qué URL responde a qué Controller
// No contiene lógica propia

import { Router } from "express";
import { WelcomeController } from "../controllers/welcome.controller";

const router = Router();
const welcomeController = new WelcomeController();

router.get("/", (req, res) => welcomeController.getPage(req, res));
router.get("/api/message", (req, res) => welcomeController.getApiMessage(req, res));

export default router;