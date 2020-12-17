import { getRequest } from "@src/network";
import { Time } from "./types";

async function time(): Promise<Time | undefined> {
    try {
        return await getRequest(CB_BASE_URL, '/time');
    } catch (error) {
        return undefined
    }
}

export { time }
