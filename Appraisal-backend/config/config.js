const dotenv = require('dotenv')
const config_result = dotenv.config({path: './.env'})
// path in dotenv must be the path corresponding importing file's path

// Cheking for error during configing .env file
if(config_result.error){
    console.log(".env file configurational error ")
} else{
    console.log('.env file successfully configured')
}

module.exports = config_result