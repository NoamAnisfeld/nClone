import { z } from "zod";

export const nLinkCreationInfoSchema = z.object({
    title: z.string(),
    author: z.string(),
});
export type NLinkCreationInfo = z.infer<typeof nLinkCreationInfoSchema>;

export const nLinkSchema = z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    commentIds: z.array(z.string()),
    votesCount: z.number(),
});
export type NLink = z.infer<typeof nLinkSchema>;

export const nLinksSchema = z.array(nLinkSchema);
export type NLinks = z.infer<typeof nLinksSchema>;