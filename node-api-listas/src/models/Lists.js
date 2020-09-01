const mongoose = require('mongoose');
const mongoosePaginate =require('mongoose-paginate');
const ListSchema = new mongoose.Schema({
     name:{
         type: String,
         required: true,
     },
      listname:{
          type: String,
          required: true,
      },
      listitens:[String],

      createdAt:{
        type: Date,
        default : Date.now,
     },


});
ListSchema.plugin(mongoosePaginate);
mongoose.model('Lists', ListSchema);