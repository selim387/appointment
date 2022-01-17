
const mongoose=require("mongoose");

try {
  const db = mongoose.connect("mongodb://127.0.0.1:27017/iptvapp", {useNewUrlParser: true, useUnifiedTopology: true});
  console.log("connection success");

}catch(err){
  console.log(err);
  process.exit(1);
}
