import type { Application, RequestHandler } from "express";
import { linkCreationInfoSchema } from "./schemas.js";
import { HttpCodes as HTTP, apiPath } from "./utils.js";
import { addLink, getLinks } from "./db-service.js";

export function router(app: Application) {
    app.get('/', rootRoute);
    app.post(apiPath('link'), addLinkRoute);
    app.get(apiPath('links'), getLinksRoute);
}

export const addLinkRoute: RequestHandler = async (req, res, next) => {
    try {
        const { title, author } = linkCreationInfoSchema.parse(req.body);
        const newLink = await addLink({ title, author });
        res.status(HTTP.created);
        res.send(newLink);
    } catch (e) {
        next(e);
    }
}

export const getLinksRoute: RequestHandler = async (_req, res) => {
    res.send(await getLinks());
}

export const rootRoute: RequestHandler = (_req, res) => {
    res.send('nLink root page');
}
