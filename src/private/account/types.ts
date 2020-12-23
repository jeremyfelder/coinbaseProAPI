interface Account {
    id: string;
    currency: string;
    balance: string;
    available: string;
    hold: string;
    profile_id: string;
    trading_enabled: boolean;
}

interface Activity {
    id: string;
    created_at:string;
    amount: string;
    balance: string;
    type: 'transfer' | 'match' | 'fee' | 'rebate' | 'conversion';
    details?: { //exists if type is 'match' or 'fee'
        order_id: string;
        trade_id: string;
        product_id: string;
    }
}

interface Hold {
    "id": string;
    "account_id": string;
    "created_at": string;
    "updated_at": string;
    "amount": string;
    "type": 'order' | 'transfer';
    "ref": string;
}

export {
    Account,
    Activity,
    Hold
}
