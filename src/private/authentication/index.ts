import crypto from 'crypto';

const SECRET = 'REPLACE_WITH_API_SECRET';

function addAuth(method: string, path: string, body: any) {
    const timestamp = Date.now() / 1000;
    const message = `${timestamp}${method}${path}${body}`;
    const key = new Buffer(SECRET, 'base64');
    const hmac = crypto.createHmac('sha256', key);
    return hmac.update(message).digest('base64');
}

export {
    addAuth
}
