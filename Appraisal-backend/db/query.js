const connectDB1 = require('./connect').connectDB(process.env.DB_NAME, process.env.DB_USER , process.env.DB_PASSWORD)
const connectDB2 = require('./connect').connectDB(process.env.DB_NAME2, process.env.DB_USER2 , process.env.DB_PASSWORD2)
exports.Query = class {
    constructor(...modelArgs){
        this.setObjects(...modelArgs)
    }

    setObjects = async function (...modelArgs) {
        // adding sequalize and model into query object
        // if no arguments given then we are only setting sequalize Object
        if(modelArgs){
            await this.setSequalizeObject()
            await this.setModelObject(...modelArgs)
        } else {
            await this.setSequalizeObject()
        }
    }

    setSequalizeObject = async function () {
        // setting sequalizeObject in query object
        this.sequelize = await connectDB1
    }

    setModelObject = async function (...args) {
        // setting Model Object in query object
        this.model = await this.sequelize.define(...args)
    }

    rawQuery = async function (queryString) {
        return await this.sequelize.query(queryString)
    }
    
    findAll= async function (...args){
        return await this.model.findAll(...args)
    }

    create = async function (row) {
            this.model.create(row).then(res=>{
            console.log(res);
        })
    }
}

exports.Query2 = class {
    constructor(...modelArgs){
        this.setObjects(...modelArgs)
    }

    setObjects = async function (...modelArgs) {
        // adding sequalize and model into query object
        // if no arguments given then we are only setting sequalize Object
        if(modelArgs){
            await this.setSequalizeObject()
            await this.setModelObject(...modelArgs)
        } else {
            await this.setSequalizeObject()
        }
    }

    setSequalizeObject = async function () {
        // setting sequalizeObject in query object
        this.sequelize = await connectDB2
    }

    setModelObject = async function (...args) {
        // setting Model Object in query object
        this.model = await this.sequelize.define(...args)
    }

    rawQuery = async function (queryString) {
        return await this.sequelize.query(queryString)
    }

    create = async function (row) {
            this.model.create(row).then(res=>{
            console.log(res);
        })
    }
}
