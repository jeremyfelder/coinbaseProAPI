import { getRequest } from '@src/network';
import { Currency } from './types';

async function currency(id: string): Promise<Currency | undefined> {
    const path = `/currencies/${id}`;
    try {
        return await getRequest(CB_BASE_URL, path);
    } catch (error) {
        return undefined;
    }
}

async function currencies(): Promise<Currency[]> {
    try {
        return await getRequest(CB_BASE_URL, '/currencies');
    } catch (error) {
        return [];
    }
}

export { currency, currencies }
