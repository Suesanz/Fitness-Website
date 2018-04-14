const PORT = process.env.PORT || 4000;

const DATABASE_URL = process.env.DATABASE_URL ||
    "mysql://ppuser:testpass@localhost:3306/passportdb"

exports = module.exports = {PORT, DATABASE_URL}