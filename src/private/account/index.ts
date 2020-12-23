import { getRequest } from '@src/network';
import { CB_BASE_URL } from '@src/marketData'
import { Account, Activity, Hold } from './types';

async function listAccounts(): Promise<Account[] | undefined> {
    const path = `/accounts`;
    try {
        return await getRequest(CB_BASE_URL, path);
    } catch (error) {
        return undefined;
    }
}

async function listAccount(id: string): Promise<Account | undefined> {
    const path = `/accounts/${id}`;
    try {
        return await getRequest(CB_BASE_URL, path);
    } catch (error) {
        return undefined;
    }
}

async function listAccountHistory(id: string, numOfActivities?: number): Promise<Activity[] | undefined> {
    const path = `/accounts/${id}/ledger`;
    try {
        return await getRequest(CB_BASE_URL, path, undefined, undefined, numOfActivities);
    } catch (error) {
        return undefined;
    }
}

async function listAccountHolds(id: string, numOfHolds?: number): Promise<Hold[] | undefined> {
    const path = `/accounts/${id}/holds`;
    try {
        return await getRequest(CB_BASE_URL, path, undefined, undefined, numOfHolds);
    } catch (error) {
        return undefined;
    }
}

export {
    listAccounts,
    listAccount,
    listAccountHistory,
    listAccountHolds
}
