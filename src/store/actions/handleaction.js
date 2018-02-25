export class handleAction {
    static GETDATA = "GETDATA";
    static GETGLOBAL = 'GETGLOBAL';
    static GETCRYPTODETAIL = 'GETCRYPTODETAIL';
    static TABLEGRAPH = 'TABLEGRAPH';



static getData = (payload) => ({
    type: handleAction.GETDATA,
    payload
})

static getGlobal = (payload) => ({
    type: handleAction.GETGLOBAL,
    payload
})


static getCryptoDetail = (payload) => ({
    type: handleAction.GETCRYPTODETAIL,
    payload
})

static getBitcoin = (payload) => ({
    type: handleAction.GETBITCOIN,
    payload
})

}