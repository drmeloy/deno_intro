import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}

// example for cat, requires local read permissions
// deno run --allow-read=./ https://deno.land/std/examples/cat.ts app.ts