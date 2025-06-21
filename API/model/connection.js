
import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/tender'; // database coonection
mongoose.connect(url).then(()=>{
    console.log("Successfully conected to mongodb database...");
}).catch((error)=>{
  console.log("failed to connect with database"+error);
})
