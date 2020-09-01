const  mongoose = require('mongoose');

const Lists = mongoose.model('Lists');

module.exports={
 async index(req,res){
  const {page=1} = req.query;
  const lists= await Lists.paginate({},{page, limit:10});
  return res.json(lists);
 },
 async show (req,res){
  const lists = await Lists.findById(req.params.id) ;
  return res.json(lists);

 },
 async store (req,res){
   const lists = await Lists.create(req.body);
   return res.json(lists);
 },
 async update(req,res ){
   const lists = await Lists.findByIdAndUpdate(req.params.id, req.body,{new:true} );
  return res.json(lists);
  },
  async destroy (req,res){
     const lists = await Lists.findByIdAndRemove(req.params.id);
     return res.send();
  }
}
;