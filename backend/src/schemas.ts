import { z } from "zod";

export const entityWithIdSchema = z.object({
    id: z.string(),
})
export type EntityWithId = z.infer<typeof entityWithIdSchema>

export const linkCreationInfoSchema = z.object({
    title: z.string(),
    author: z.string(),
});
export type LinkCreationInfo = z.infer<typeof linkCreationInfoSchema>;

export const linkSchema = z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    commentIds: z.array(z.string()),
    votesCount: z.number(),
});
export type Link = z.infer<typeof linkSchema>;

export const dbSchema = z.object({
    links: z.array(linkSchema),
});
export type DB = z.infer<typeof dbSchema>;