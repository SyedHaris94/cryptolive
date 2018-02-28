import axios from 'axios';

import { handleAction } from '../actions/handleaction';
export default class MiddleWare{
    
    static GetData = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData1(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData2 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=150&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData2(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData3 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=300&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData3(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData4 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=450&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData4(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData5 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=600&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData5(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData6 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=750&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData6(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData7 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=900&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData7(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData8 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=1050&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData8(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData9 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=1200&limit=150')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData9(res.data))
                })
                .catch((err) => {
                    console.log("error", err)  
                })
            }
        }


        static GetData10 = () => {
            return dispatch => {
                axios.get('https://api.coinmarketcap.com/v1/ticker/?start=1350&limit=200')
                .then((res) => {
                    console.log("response of getting data req", res.data)
                    dispatch(handleAction.getData10(res.data))
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