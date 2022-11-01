import "dotenv/config";
import next from "next";
import app from "./app";
import path from "path";
import "./database";
import "./src/services/passport";
import "./src/interfaces/index";

import PagesRoutes from "./src/routes/pages.routes";

const dev = process.env.NODE_ENV !== "production";
export const nextApp = next({
  dev,
  dir: "./frontend",
});
const handle = nextApp.getRequestHandler();

(async () => {
  await nextApp.prepare();

  app.use(PagesRoutes);

  app.get("/favicon.ico", (_, res) => {
    const faviconOptions = {
      root: path.join(__dirname, "../frontend/public/"),
    };
    res.status(200).sendFile("favicon.ico", faviconOptions);
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(app.get("port"));
  console.log(`> Ready on http://localhost:${app.get("port")}`);
})();
