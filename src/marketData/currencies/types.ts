interface Currency {
    "id": string;
    "name": string;
    "min_size": string;
    "status": string;
    "max_precision": string;
    "message": string;
    "details": {
        "type": string;
        "symbol": string;
        "network_confirmations": number;
        "sort_order": number;
        "crypto_address_link": string;
        "crypto_transaction_link": string;
        "push_payment_methods": string[];
        "group_types": string[];
    }
}

export { Currency }