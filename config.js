const PORT = process.env.PORT || 3232;

const DATABASE_URL = process.env.DATABASE_URL ||
    "mysql://fituser:fituser@localhost/fitnessdb"

const facebook={
    clientID: '585674691785101',
    clientSecret: '98c7b81fee68a626940c1045138c57eb'

}
const twitter={
    consumerKey: '0GMmQ8zZ949pIlgbHGw8n4KFa',
    consumerSecret: 'rs4e1CXqiwaXGRnqXYiaF5OHwxaHEVcsCPjVnBnU8UU1WDI9KZ'
};
exports = module.exports = {PORT, DATABASE_URL,facebook,twitter}