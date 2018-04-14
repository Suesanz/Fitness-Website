const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes


if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {


    const db = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
        dialect: 'postgres',
        port: '5432',
        host: 'ec2-54-235-193-34.compute-1.amazonaws.com'

    })
}
else{
    db=new Sequelize('passportdb','ppuser','root')
}
const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: DataTypes.STRING
})
const UserFacebook = db.define('userfacebook', {
    id: {type: Sequelize.DataTypes.BIGINT, primaryKey: true},
    accessToken: Sequelize.DataTypes.STRING,
    refreshToken: {type: Sequelize.DataTypes.STRING, allowNull: true},
    photo: {type: Sequelize.DataTypes.STRING, allowNull: true},

});
const UserTwitter = db.define('usertwitter', {
    id: {type: Sequelize.DataTypes.BIGINT, primaryKey: true},
    accessToken: Sequelize.DataTypes.STRING,
    refreshToken: {type: Sequelize.DataTypes.STRING, allowNull: true},
    photo: {type: Sequelize.DataTypes.STRING, allowNull: true},
});
db.sync().then(() => "Database created")

exports = module.exports = {
    db,
    User, UserFacebook, UserTwitter
}