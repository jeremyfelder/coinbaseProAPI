import axios from 'axios';
import { stringifyPretty } from '@src/utils';
import * as querystring from 'querystring';

interface Response {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request: any;
}

const defaultHeaders = {
  'Content-Type': 'application/json'
}

/**
 * Performs a GET request
 * 
 * @param baseURL - Domain including subdomains and TLD
 * @param path - Path to call - should include a preceeding '/'
 * @param params - Query string paramters in dictionary (object) form
 * @param additonalHeaders - Additional Headers to apply to the request in dictionary (object) form
 */
async function getRequest(baseURL: string, path: string, params?: any, additonalHeaders?: any) {
  const queryStringParams: string = params ? '' : `/?${querystring.stringify(params)}`;
  const urlWithQueryParams = `${baseURL}${path}${queryStringParams}`;
  const headers = { ...defaultHeaders, ...additonalHeaders };

  try {
    const res: Response = await axios.get(urlWithQueryParams, { headers });
    return res.data
  } catch (error) {
    if(error.response) {
      console.error(`GET ${path} returned error ${stringifyPretty(error.response)}`);
    } else {
      console.error(`GET ${path} had an unexpected error ${error}`);
    }
    throw error
  }
}

/**
 * Performs a POST request
 *  
 * @param baseURL - Domain including subdomains and TLD
 * @param path - Path to call - should include a preceeding '/'
 * @param params - Query string paramters in dictionary (object) form
 * @param additonalHeaders - Additional Headers to apply to the request in dictionary (object) form
 */
async function postRequest(baseURL: string, path: string, params?: any, additonalHeaders?: any) {
  const url = `${baseURL}${path}`;
  const headers = { ...defaultHeaders, ...additonalHeaders };

  try {
    const res: Response = await axios.post(url, params, { headers });
    return res.data
  } catch (error) {
    if(error.response) {
      console.error(`GET ${path} returned error ${stringifyPretty(error.response)}`);
    } else {
      console.error(`GET ${path} had an unexpected error ${error}`);
    }
    throw error
  }
}

export { getRequest, postRequest }
