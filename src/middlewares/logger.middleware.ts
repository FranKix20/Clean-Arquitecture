// MIDDLEWARES — Se ejecutan antes de llegar al Controller

import { Request, Response, NextFunction } from "express";
import { Logger } from "../utils/logger";

const logger = new Logger("HTTP");

export function requestLogger(req: Request, _res: Response, next: NextFunction): void {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
}
