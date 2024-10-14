import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (ctx) => {
  return ctx.json({ message: "Hello World" });
});

export const GET = handle(app);
