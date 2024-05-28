import { nLinksSchema } from "./schemas";
import { ApiUrl, fetchJson } from "./utils";

export async function fetchNLinks() {
    const json = await fetchJson(ApiUrl('links'));
    const nLinks = nLinksSchema.parse(json);
    return nLinks;
}