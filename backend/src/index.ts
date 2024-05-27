import express from "express";
import bodyParser from "body-parser";
import { corsManager } from "./cors-manager.js";
import { PORT } from "./globals.js";
import { router } from "./routes.js";

init();

function init() {
    const app = express();

    app.use(
        bodyParser.json(),
        corsManager,
    );

    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
        router(app);
    });
}
