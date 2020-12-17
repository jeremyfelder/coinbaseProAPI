interface Product {
    "id": string;
    "display_name": string;
    "base_currency": string;
    "quote_currency": string;
    "base_increment": string;
    "quote_increment": string;
    "base_min_size": string;
    "base_max_size": string;
    "min_market_funds": string;
    "max_market_funds": string;
    "status": string;
    "status_message": string;
    "cancel_only": boolean,
    "limit_only": boolean,
    "post_only": boolean,
    "trading_disabled": boolean
}

interface OrderBook {
    "sequence": string;
    "bids": [string, string, number][];
    "asks": [string, string, number][];
}

interface Ticker {
    "trade_id": number,
    "price": string;
    "size": string;
    "bid": string;
    "ask": string;
    "volume": string;
    "time": string;
}

interface LastTrade {
    "time": string;
    "trade_id": number,
    "price": string;
    "size": string;
    "side": string;
}

type Candle = [number, number, number, number, number, number]

interface TwentyFourHourStats {
    "open": string;
    "high": string; 
    "low": string; 
    "volume": string; 
    "last": string;
    "volume_30day": string;
}

export { 
    Product,
    OrderBook,
    Ticker,
    LastTrade,
    Candle,
    TwentyFourHourStats
}
