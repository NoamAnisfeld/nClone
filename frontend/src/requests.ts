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