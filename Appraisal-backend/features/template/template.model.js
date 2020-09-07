const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER , process.env.DB_PASSWORD, { dialect: 'postgres' })
const template = sequelize.define('template', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    template_name: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
    },
    allowed_profile: {
        type: Sequelize.STRING
    },
    allowed_experience: {
        type: Sequelize.STRING
    },
    allowed_exhibit: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'template',
    timestamps: false
});
const Query = require('../../db/query').Query
exports.query = new Query(template)
