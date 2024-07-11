import { createFactory } from "hono/factory";

const factory = createFactory();

export const getUserProfile = factory.createHandlers((c) => {
  return c.json({ message: "Hello User Profile" }, 200);
});
