import { getRequest } from '@src/network';
import { OrderBook, Product } from './types';

async function products(): Promise<Product[]> {
    try {
        return await getRequest(CB_BASE_URL, '/products');
    } catch (error) {
        return []
    }
}

async function product(id: string): Promise<Product | undefined> {
    const path = `/products/${id}`;
    try {
        return await getRequest(CB_BASE_URL, path);
    } catch (error) {
        return undefined;
    }
}

async function book(id: string, level = 1): Promise<OrderBook | undefined> {
    try {
        return await getRequest(CB_BASE_URL, `/products/${id}/book`, { level });
    } catch (error) {
        return undefined
    }
}

async function ticker(id: string): Promise<Ticker | undefined> {
    try {
        return await getRequest(CB_BASE_URL, `/products/${id}/ticker`);
    } catch (error) {
        return undefined
    }
}

async function lastTrade(id: string): Promise<LastTrade[] | undefined> {
    try {
        return await getRequest(CB_BASE_URL, `/products/${id}/trades`);
    } catch (error) {
        return undefined
    }
}

async function historicRates(id: string, granularity: number, begin: string, end: string): Promise<Candle[] | undefined> {
    // TODO throw if the begin, end, and granularity will create more than 300 points
    try {
        return await getRequest(CB_BASE_URL, `/products/${id}/candles`, );
    } catch (error) {
        return undefined
    }
}

async function twentyFourHourStats(id: string): Promise<TwentyFourHourStats | undefined> {
    try {
        return await getRequest(CB_BASE_URL, `/products/${id}/stats`);
    } catch (error) {
        return undefined
    }
}

export {
    product,
    products,
    book,
    ticker,
    lastTrade,
    historicRates,
    twentyFourHourStats
}
