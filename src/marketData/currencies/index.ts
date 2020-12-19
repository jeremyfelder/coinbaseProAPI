import { getRequest } from '@src/network';
import { Currency } from '@src/marketData/currencies/types';
import { CB_BASE_URL } from '@src/marketData'

async function getCurrency(id: string): Promise<Currency | undefined> {
    const path = `/currencies/${id}`;
    try {
        return await getRequest(CB_BASE_URL, path);
    } catch (error) {
        return undefined;
    }
}

async function getAllCurrencies(): Promise<Currency[]> {
    try {
        return await getRequest(CB_BASE_URL, '/currencies');
    } catch (error) {
        return [];
    }
}

export { getCurrency, getAllCurrencies }
