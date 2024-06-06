import { NLinks, NLinkCreationInfo, nLinksSchema } from "./schemas";
import { ApiUrl, fetchJson, postJson } from "./utils";

export async function fetchNLinks(): Promise<NLinks> {
    const json = await fetchJson(ApiUrl('links'));
    const nLinks = nLinksSchema.parse(json);
    return nLinks;
}

export async function addNLink(info: NLinkCreationInfo) {
    const response = await postJson(ApiUrl('link'), info);
    return response;
}

export async function upvote(id: string) {
    const response = await postJson(ApiUrl('upvote'), { id });
    return response;
}

export async function downvote(id: string) {
    const response = await postJson(ApiUrl('downvote'), { id });
    return response;
}