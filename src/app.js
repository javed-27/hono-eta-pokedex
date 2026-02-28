import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";
import { template } from "./templeate.js";

export const createApp = () => {
  const app = new Hono();
  app.use(logger());
  app.get("/", (c) => {
    const type = c.req.query("type");
    return c.html(template(type));
  });
  app.get("*", serveStatic({ root: "./public/" }));
  return app;
};
