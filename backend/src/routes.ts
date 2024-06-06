import type { Application, RequestHandler } from "express";
import { linkCreationInfoSchema, entityWithIdSchema } from "./schemas.js";
import { HttpCodes as HTTP, apiPath } from "./utils.js";
import { addLink, getLinks, castUpvote, castDownvote } from "./db-service.js";

export function router(app: Application) {
    app.get('/', rootRoute);
    app.post(apiPath('link'), addLinkRoute);
    app.get(apiPath('links'), getLinksRoute);
    app.post(apiPath('upvote'), upvoteRoute);
    app.post(apiPath('downvote'), downvoteRoute);
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

export const upvoteRoute: RequestHandler = async (req, res, next) => {
    try {
        const { id } = entityWithIdSchema.parse(req.body);
        const newVotesCount = await castUpvote({ id });
        res.status(HTTP.updated);
        res.send(String(newVotesCount));
    } catch (e) {
        next(e);
    }
}

export const downvoteRoute: RequestHandler = async (req, res, next) => {
    try {
        const { id } = entityWithIdSchema.parse(req.body);
        const newVotesCount = await castDownvote({ id });
        res.status(HTTP.updated);
        res.send(String(newVotesCount));
    } catch (e) {
        next(e);
    }
}

export const rootRoute: RequestHandler = (_req, res) => {
    res.send('nLink root page');
}
