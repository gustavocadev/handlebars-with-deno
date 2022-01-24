import { Router } from "https://deno.land/x/oak/mod.ts";
import { getIndex } from "../controllers/index.controllers.ts";

const router = new Router();

router.get("/", getIndex);

console.log("router set up");

export default router;
