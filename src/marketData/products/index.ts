import { getRequest } from '@src/network';
import { Candle, LastTrade, OrderBook, Product, Ticker, TwentyFourHourStats } from '@src/marketData/products/types';
import { CB_BASE_URL } from '@src/marketData'

const MAX_NUM_CANDLES = 300;

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

async function historicRates(id: string, granularity: number, begin: number, end: number): Promise<Candle[] | undefined> {
    const expectedNumCandles = (begin-end)/granularity;
    if(expectedNumCandles > MAX_NUM_CANDLES) {
        throw new Error(`Expected number of candles ${expectedNumCandles} is greater than the max allowed: ${MAX_NUM_CANDLES}`);
    }
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
