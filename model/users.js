const { sequelize } = require("../config/db.connection");

module.exports = (sequelize, DataTypes) => {
    const usersSchema = sequelize.define('users', {
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return usersSchema
}