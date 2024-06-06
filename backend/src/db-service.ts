import type { DB, EntityWithId, Link, LinkCreationInfo } from "./schemas.js";
import { dbSchema } from "./schemas.js";
import { generateId } from "./utils.js";
import fs from 'node:fs';

const DB_FILE_PATH = 'pseudo-db.json';
const _db = _retriveDb();

function _retriveDb(): DB {
    try {
        const fileContents = fs.readFileSync(DB_FILE_PATH);
        const json = JSON.parse(fileContents.toString());
        const validated = dbSchema.parse(json);
        return validated;
    } catch (e) {
        console.error('Error: Unable to read from the pseudo DB file or data is malformed\n', e);
        return {
            links: [],
        };
    }
}

function _persistDb() {
    fs.writeFile(
        DB_FILE_PATH,
        JSON.stringify(_db, undefined, 4),
        error => error && console.log('Error saving DB data to file:\n', error),
    );    
}

export async function addLink(creationInfo: LinkCreationInfo) {

    const newLink: Link = {
        id: generateId(),
        title: creationInfo.title,
        author: creationInfo.author,
        commentIds: [],
        votesCount: 0,
    };
    _db.links.push(newLink);
    _persistDb();
    return newLink;
}

export async function getLinks() {
    return _db.links;
}

export async function castUpvote({ id }: EntityWithId) {
    const index = _db.links.findIndex(item => item.id === id);
    
    if (index === -1) {
        throw new Error('Id not found');
    }

    const newVotesCount = _db.links[index].votesCount + 1;
    _db.links[index].votesCount = newVotesCount;
    _persistDb();
    return newVotesCount;
}

export async function castDownvote({ id }: EntityWithId) {
    const index = _db.links.findIndex(item => item.id === id);
    
    if (index === -1) {
        throw new Error('Id not found');
    }

    const newVotesCount = _db.links[index].votesCount - 1;
    _db.links[index].votesCount = newVotesCount;
    _persistDb();
    return newVotesCount;
}