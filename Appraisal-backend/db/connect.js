const { Sequelize } = require('sequelize');
exports.connectDB = async function (databaseName, userName, password) {
    require('./appraisaldatabase').createDB(databaseName, userName, password);
    const sequelize = await new Sequelize(databaseName, userName, password, { dialect: 'postgres'})
    try {
        await sequelize.authenticate()
        console.log('Database :' + databaseName + ', connection has been established successfully.')
    } catch(err) {
        console.error('Unable to connect to the database:', err);
    }
    await sequelize.sync();
    return sequelize
}