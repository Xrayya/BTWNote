import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import userRoute from "./routes/user";
import { cors } from "hono/cors";

const backend = new Hono().basePath("/api");

backend.use(cors());
backend.use(logger());
backend.use(prettyJSON());

backend.route("/users", userRoute);

backend.get("/", (c) => {
  return c.json({ message: "You are entering the root of BTWNote API." }, 200);
});

export default backend;
