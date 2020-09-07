const userModel = require('../features/user/user.model')

exports.isuserauth = async (req,res,next)=>{
    /*var data = await userModel.query1.rawQuery("select emp_type from appraisal_login_log where authtoken='"+req.header('Authorization')+"';")
    console.log('adminauth');
    if(data[0][0].emp_type==='Employee'){
        console.log('userauth');
        next();
    }*/
    next();
}

exports.isadminauth = async (req,res,next)=>{
    /*var data = await userModel.query1.rawQuery("select emp_type from appraisal_login_log where authtoken='"+req.header('Authorization')+"';")
    if(data[0][0].emp_type==='Trainee'){
        console.log('adminauth');
        next();
    }*/
    next();
}