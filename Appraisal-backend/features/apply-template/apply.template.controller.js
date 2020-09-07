const templateService = require('./template.service')
const query = require('./template.model').query
//const Query = require('../../db/query').Query
//const query = new Query()
exports.getTemplateList = async (req,res)=>{
 // const data = await query.rawQuery("select * from template")
  //const rows = data[1].rows
  rows=[{
    template_name:'Trainee Template',
    allowed_profile:'Profile1',
    allowed_experience:'',
    allowed_exhibit:'',
  },{
    template_name:'Template4',
    allowed_profile:'Profile2',
    allowed_experience:'1-3',
    allowed_exhibit:'1-4.5',
  },
  {
    template_name:'Template3',
    allowed_profile:'',
    allowed_experience:'0-2',
    allowed_exhibit:'',
  },
  {
    template_name:'Template5',
    allowed_profile:'Profile2',
    allowed_experience:'0-2',
    allowed_exhibit:'1-5',
  },
  {
    template_name:'Template2',
    allowed_profile:'Profile1',
    allowed_experience:'',
    allowed_exhibit:'',
  },
]
  res.json({result: rows})
}

/*exports.getTemplateList = async (req,res)=>{
  let resp = this.query.findAll()
  console.log(data)
  res.json({
    data: resp
  })
}*/

exports.addtemplate = async (req,res)=>{
  //const templatedata = req.body.templatedata
  const templatedata={template_name:'temp1',conditions:{profile:'pa'},fields:{basic:'50%ofpackage'}}
  try{
  var inserttemplatequery1 = 'insert into template(template_name'
  var inserttemplatequery2 = ") values ('"+templatedata.template_name
  for(var condition in templatedata.conditions) {
    inserttemplatequery1 += (",allowed_" + condition)
    inserttemplatequery2 += ("','" + templatedata.conditions[condition])
    await query.rawQuery("ALTER TABLE template ADD COLUMN IF NOT EXISTS allowed_" + condition + " varchar(50)")
  }
  for(var field in templatedata.fields) {
    inserttemplatequery1 += ("," + field)
    inserttemplatequery2 += ("','" + templatedata.fields[field])
    await query.rawQuery("ALTER TABLE template ADD COLUMN IF NOT EXISTS " + field + " varchar(50)")
    await query.rawQuery("ALTER TABLE salary ADD COLUMN IF NOT EXISTS " + field + " varchar(50)")
    await query.rawQuery("ALTER TABLE exhibit ADD COLUMN IF NOT EXISTS " + field + " varchar(50)")
  }
  await query.rawQuery(inserttemplatequery1+inserttemplatequery2+"');");
  res.json({status:200})
  }
  catch(err){res.json({status:505})}
}