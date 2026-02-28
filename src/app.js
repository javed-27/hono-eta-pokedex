import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";
import { template } from "./templeate.js";

export const createApp = () => {
  const app = new Hono();
  app.use(logger());
  app.get("/etaPag", (c) => c.html(template()));
  app.get("*", serveStatic({ root: "./public/" }));
  return app;
};
