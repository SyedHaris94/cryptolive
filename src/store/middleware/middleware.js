import axios from 'axios';

import { handleAction } from '../actions/handleaction';
export default class MiddleWare{
    
    static GetData = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }

    static GetGlobal = () => {  
        return dispatch => {
            axios.get('https://api.coinmarketcap.com/v1/global/')
            .then((res) => {
                console.log('response of getting global req', res.data)
                dispatch(handleAction.getGlobal(res.data))
            })
            .catch((err) => {
                console.log('error', err)
            })
        }
    }

    static CryptoInfo = () => {  
        return dispatch => {
            axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=1600')
            .then((res) => {
                console.log('response of getting global req', res.data)
                dispatch(handleAction.getCryptoDetail(res.data))
            })
            .catch((err) => {
                console.log('error', err)
            })
        }
    }


    static BitcoinData = () => {
        return dispatch => {
            axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
            .then((res) => {
                console.log('response of getting bitcoin page', res.data)
                dispatch(handleAction.getBitcoin(res.data))
            })
            .catch((err) => {
                console.log('error', err)
            })
        }
    }
}