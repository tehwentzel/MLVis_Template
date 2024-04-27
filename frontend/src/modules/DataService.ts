import axios, { Axios } from 'axios';
import * as endpoint from './Endpoint';
import {Misc} from '../types';

export default class DataService {
    api: Axios;

    constructor(){
        const headers = {
            'Content-Type': 'application/json',
          };

        this.api = axios.create({
            baseURL: endpoint.API_URL,
            headers: headers,
        });
    }

    getParamList(pObj: Misc): string{
        //returns an object and turns the entries into a url query
        //e.g {key: value} => http://localhost:<port>/location?key=value
        let newParams = {}
        let empty= true;
        for(let k of Object.keys(pObj)){
            if(pObj[k] !== undefined && pObj[k] !== null){
                newParams[k] = pObj[k];
                empty = false;
            }
        }
        let paramQuery = '';
        if(!empty){
            let pstring = new URLSearchParams(newParams);
            paramQuery = paramQuery + '?' + pstring
        }
        return paramQuery
    }

    async test(): Promise<string> {
        let qstring = '/'
        try{
            let response = await this.api.get(qstring)
            return response.data;
        }
        catch(error){
            console.log('test failed',error)
        }
    }

}