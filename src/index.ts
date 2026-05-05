// ENTRY POINT — Ensambla todo y levanta el servidor

import express from "express";
import path from "path";
import welcomeRoutes from "./routes/welcome.routes";
import { requestLogger } from "./middlewares/logger.middleware";
import { Logger } from "./utils/logger";

const app = express();
const PORT = process.env.PORT || 3000;
const logger = new Logger("App");

// Middlewares globales
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(requestLogger);

// Rutas
app.use("/", welcomeRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  logger.info(`Servidor corriendo en http://localhost:${PORT}`);
  logger.info(`Flujo: Request → Routes → Controllers → Services → Models → Response`);
});

export default app;
