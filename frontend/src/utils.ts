import { apiEndpoint } from "./globals";

export function ApiUrl(subpath: string): string {
    return new URL(subpath, apiEndpoint).href;
}

export async function fetchJson(url: string): Promise<unknown> {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

export async function postJson(url: string, data: unknown) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}