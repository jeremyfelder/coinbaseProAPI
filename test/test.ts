import { getAllCurrencies, getCurrency } from '../src/marketData/currencies';
import { expect } from 'chai';

describe('MarketData Unit Tests', async () => {
    describe('Currencies Unit Tests', async () => {
        it('Get all currencies', async () => {
            const res = await getAllCurrencies();
            expect(res).to.be.not.empty;
            expect(res[0]).to.include.all.keys('id', 'name', 'min_size', 'status', 'max_precision', 'message', 'details');
        });

        it('Get BTC Currency', async () => {
            const res = await getCurrency('BTC');
            expect(res).to.be.not.undefined;
            expect(res).to.include.all.keys('id', 'name', 'min_size', 'status', 'max_precision', 'message', 'details');
            expect(res?.name).to.eq('Bitcoin');            
        });
    })
})