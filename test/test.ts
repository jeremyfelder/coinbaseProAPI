import { getAllCurrencies } from '@src/marketData/currencies';

describe('MarketData Unit Tests', async () => {
    console.log("Starting MarketData Tests");
    describe('Currencies Unit Tests', async () => {
        console.log("Starting Currencies Tests");
        it('Get all currencies', async () => {
            console.log("Running 'Get all currenices'");
            const res = await getAllCurrencies();
            console.log(res);
        })
    })
})