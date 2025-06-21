import '../model/connection.js'
import url from 'url';
import path from 'path';
import rs from 'randomstring';
import subSchemaModel from '../model/subcategory.model.js';
import { error } from 'console';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
export const save = async (req, res) => {

    if (!req.files || !req.files.caticon) {
        return res.status(400).json({ status: false, message: "No file uploaded" });
    }
    var sList = await subSchemaModel.find();
    var l = sList.length;
    var _id = l == 0 ? 1 : sList[l - 1]._id + 1;

    var caticon = req.files.caticon;
    // console.log(req.files.caticon);
    var subcaticonnm = rs.generate(10) + "-" + Date.now() + "-" + caticon.name;

    var filepath = path.join(__dirname, "../../tender-new/public/assets/uploads/subcaticons", subcaticonnm);
    const scDetails = { ...req.body, "_id": _id, "subcaticonnm": subcaticonnm };
    //  console.log(scDetails);
    try {
        await subSchemaModel.create(scDetails)
        try {
            caticon.mv(filepath, (err) => {
                if (err) {
                    console.error("File upload error:", err);
                    return res.status(500).json({ status: false, message: "File upload failed" });
                }
                res.status(200).json({ status: true });
            });
        }
        catch {
            res.status(500).json({ status: false, message: "File upload failed" });
        };

    } catch (error) {
        console.error(error);  // Log the error to debug
        res.status(500).json({ status: false, error: error.message });
    }
};

export const fetch = async (req, res) => {
    let condition_obj = url.parse(req.url, true).query;
    // if(condition_obj!=undefined)
    // {
    //     condition_obj = (condition_obj);
    // }
    // else
    // condition_obj = {};
    const sclist = await subSchemaModel.find(condition_obj);
    if (sclist.length != 0) {
        res.status(200).json(sclist);
    }
    else
        res.status(400).json("resource not found");

}

export const update = async (req, res) => {
    let sList = await subSchemaModel.find(JSON.parse(req.body.condition_obj));
    if (sList) {
        let subcategory = await subSchemaModel.updateOne(JSON.parse(req.body.condition_obj), { $set: (JSON.parse(req.body.content_obj)) });
        if (subcategory)
            res.status(200).json("succuss");
        else
            res.status(500).json("server error")
    }
    else
        res.status(400).json("Resource is not found");
}

export const deletesub = async (req, res) => {
    var sList = await subSchemaModel.findOne(JSON.parse(req.body.condition_obj))
    if (sList) {
        var subcategory = await subSchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
        if (subcategory)
            res.status(200).json("success");
        else
            res.status(500).json("Server error");
    }
    else
        res.status(400).json("resource not found");
}