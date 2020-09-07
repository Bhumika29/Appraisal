const userModel = require('./user.model')
const userService = require('./user.service')

exports.checkuserstatus = async (req,res)=>{
    res.json({ status: 'Trainee' ,valid: true})
    /*var data = JSON
    var email=req.query.useremail
    var authtoken=req.query.authtoken
    data = await userModel.query2.rawQuery("select * from system_user_detail where email_address='"+email+"'")
    if ( data[0][0].email_address === email){
        var data2 = JSON
        data2 = await userModel.query1.rawQuery("insert into appraisal_login_log(authtoken,emp_type,employee_email) values('"+authtoken+"','"+data[0][0].emp_type+"','"+email+"')")
        res.json({ status: data[0][0].emp_type ,valid: true})
        res.json({ status: 'admin' ,valid: true})
    } else {
        res.json({ status: '' ,valid: false})
    }*/
}
