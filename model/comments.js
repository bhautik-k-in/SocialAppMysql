const { sequelize } = require("../config/db.connection");

module.exports = (sequelize, DataTypes) => {
    const commentsSchema = sequelize.define('comments', {
        message: {
            type: DataTypes.TEXT,
            required: true,
            allowNull: false
        }
    })
    return commentsSchema
}