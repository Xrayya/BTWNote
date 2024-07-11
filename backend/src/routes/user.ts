import { getUserProfile } from "@/controllers/user";
import { Hono } from "hono";

const userRoute = new Hono()

userRoute.get("/profile", ...getUserProfile)

export default userRoute;
