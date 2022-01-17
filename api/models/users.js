//Require Mongoose
const mongoose = require('mongoose');
//const bcrypt = require("bcrypt");

//Define a schema
const userSchema = new mongoose.Schema({
    /*code: {
        type: String,
        required: false,
        trim: true,
        unique: true
    },*/
    client: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    type: {
      type: String,
      required: true,
    },

    note: {
      type: String,
    },

    /*  role: {
          type: String,
          enum: ["user", "admin"],
          default: "user",
      },*/
    days:{
      type:Number,

    },
    /*Mac:{
    type:String,
},*/
    Reseller:{
      type:String,
      required:true
    },



  },

  {timestamps: true}
);

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userSchema);
