var Sequelize = require('sequelize')
const restricted_value= require('../../helpers/custom-validations')
/*
 module.exports= function(sequelize,DATATYPES){
    Template=sequelize.define('template',{
    templateName: {
        type: DATATYPES.STRING,
        unique: true,
        allowNull: false,
        
        set: function(value){
            this.setDataValue('templateName', value.toUpperCase())

        },
        validate:{
            is: {
                args:/^[A-Za-z]+[0-9]*$/, 
                msg: "Template name must be text or text followed by num"
            },
            restricted_value: value => {restricted_value(value)}
       }
    },
    },
    {
        get: function(value) {
            this.getDataValue('field')
        },
       hooks:{
           afterValidate: function(template){
            //template.templateName = template.templateName.toUpperCase();
            console.log("Successfully validated and template name is ", template.templateName)
           }
       }
    
    }
    );
    return Template;
}
*/

const Query2 = require('../../db/query').Query2
const Query1 = require('../../db/query').Query
// Query get's an arguments requiered for Sequelize.define()
exports.query2 = new Query2()
exports.query1 = new Query1()