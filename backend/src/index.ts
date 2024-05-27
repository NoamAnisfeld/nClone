import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./globals.js";
import { router } from "./routes.js";

init();

function init() {
    const app = express();

    app.use(bodyParser.json());

    app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
        router(app);
    });
}
