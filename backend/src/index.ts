import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import userRoute from "./routes/user";
import { HTTPException } from "hono/http-exception";

const backend = new Hono().basePath("/api");

backend.use(cors());
backend.use(logger());
backend.use(prettyJSON());

backend.route("/users", userRoute);

backend.get("/", (c) => {
  return c.json({ message: "You are entering the root of BTWNote API." }, 200);
});

backend.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({ message: err.message }, err.status);
  }

  return c.json({ message: "Internal Server Error" }, 500);
});

export default backend;
