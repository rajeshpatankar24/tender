import "../model/connection.js";
import url from 'url';
import path from "path";
import TenderSchemaModel from "../model/product.model.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
export const save = async (req, res) => {
      var pList = await TenderSchemaModel.find();
      var l = pList.length;
      var _id = l == 0 ? 1 : pList[l - 1]._id + 1; // for dynamic id increment
      const file = req.files.piconnm;
      // console.log(file);
      var piconnm = file.name;
      const filePath = path.join(__dirname, '../../tender-new/public/assets/uploads/picons',piconnm );
      const pDetails = { ...req.body, "_id": _id, 'piconnm': piconnm ,"info":Date()}
      try {
            await TenderSchemaModel.create(pDetails)
            res.status(201).json({ "status": true });
            file.mv(filePath)
      }
      catch (error) {
            res.status(500).json("false")
      }
} 

export const fetch = async (req,res)=>{
      // console.log(req.body);
  var condition_obj= url.parse(req.url,true).query;
//   console.log(condition_obj);
   var pList = await TenderSchemaModel.find(condition_obj);// if the id not found it will return an empty array
   if (pList.length!=0)
   res.status(200).json(pList)
   else
   res.status(404).json({"status":"Resource not found "});
}
// export const updateData =async(req,res)=>{
 
// let userDetails =await UserSchemaModel.findOne(req.body.condition_obj);
// if(userDetails){
//   let user=await UserSchemaModel.updateOne((req.body.condition_obj),{$set: req.body.content_obj});  
//   if(user)
//     res.status(200).json("Success");
//   else
//   res.status(500).json("Server error");
// } 
// else
// res.status(404).json({"status":"Resource is not found "})
// }



// export const deleteData = async (req,res)=>{
//   let uDetails = await UserSchemaModel.findOne((req.body));
  
//   if(uDetails)
//   {
//     let user = await UserSchemaModel.deleteOne((req.body));
//     if(user)
//       res.status(200).json("success");
//     else
//     res.status(500).json("Server error");
//   }
//   else
//   res.status(404).json("Resource is not found");
  
// }