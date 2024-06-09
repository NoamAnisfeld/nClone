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

export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch(e) {
        return false;
    }
}

export function dateParts(date: Date) {
    return {
        year: date.getFullYear(),
        monthNumber: date.getMonth() + 1,
        monthName: ['January', 'February', 'March', 'April', 'May', 'June', 'Julu', 'August', 'September', 'October', 'November', 'December'][date.getMonth()],
        monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()],
        monthDay: date.getDate(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        milliseconds: date.getMilliseconds(),
    };
}
