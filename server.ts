import { Application } from "https://deno.land/x/oak/mod.ts";
import { Handlebars } from 'https://deno.land/x/handlebars/mod.ts';
import router from "./routes/index.routes.ts";

const app = new Application();
const handle = new Handlebars();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`listening on port 8000...`);
await app.listen({ port: 8000 });

export { handle }