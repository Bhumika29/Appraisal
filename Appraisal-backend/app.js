const config = require('./config/config')
const express = require('express');
const bodyParser = require('body-parser')
const templateRoute = require('./features/template/template.router')
//const userRoute = require('./features/user/user.router')
const authentication = require('./middlewares/authentication');
const app = express();
app.use(bodyParser.json());

app.use('/api/template',authentication.isadminauth,templateRoute)

//app.use('/api/user',authentication.isuserauth,userRoute)

app.get('**',(req, res)=>{
    res.send({'error': 'Page not available'})
    res.end()
})

app.listen(process.env.PORT, ()=>{
     console.log("server is running on http://localhost:" + process.env.PORT)
});