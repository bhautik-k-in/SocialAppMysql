const { sequelize } = require("../config/db.connection");

module.exports = (sequelize, DataTypes) => {
    const postsSchema = sequelize.define('posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            required: true
        }
    })
    return postsSchema
}