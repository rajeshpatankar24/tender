import { __categoryapiurl, __productapiurl, __subcategoryapiurl } from '../../API_URL';
import './AddTender.css';
import { useState,useEffect } from 'react';
import axios from 'axios';



function AddTender() {
const [title,setTitle] = useState();
const [file,setFile] = useState();
const[catnm,setCatName] = useState();
const [subcatnm,setSubCatName] = useState();
const [descp,setDescp] = useState();
const [picon,setPicon] = useState();
const [output,setOutput] = useState();
const [baseprice,setPrice] = useState();
const [cDetails, setCatDetails] = useState([]);
const [scDetails, setScDetails] = useState([]);

useEffect(()=>{
  axios.get(__categoryapiurl+"fetch").then((response)=>{
    // console.log(response.data)
    setCatDetails(response.data);

  }).catch((error)=>{
    console.log(error);
   
  })
},[]);

const fetchSubCat = (catnm) => {
  setCatName(catnm);
  axios.get(__subcategoryapiurl + "fetch?catnm=" + catnm).then((response) => {
    setScDetails(response.data);
    // console.log(response.data);
  }).catch((error) => {
    setScDetails([]);
  });
}
const handleChange = (event) => {
  setFile(event.target.files[0]);
};

const handlesubmit=((event)=>{
 event.preventDefault();
 var form = new FormData();
 form.append("title",title);
 form.append("catnm",catnm);
 form.append("subcatnm",subcatnm);
 form.append("description",descp);
 form.append("baseprice",baseprice);
 form.append('uid',localStorage.getItem('email'));
 form.append("piconnm",file);

 const config = {
  "content-type":"multipart/form-data"
 }
 axios.post(__productapiurl+"save",form,config).then((response)=>{
  setOutput("Tender added successfully");
  setTitle("");
  setDescp("");
  setCatName("");
  setSubCatName("");
  setPrice("");


 }).catch((error)=>{
     console.log(error);
 })
})

  return (
    <>
   <div class="container-xxl py-5">
        <div class="container p-4" >
            <div class="row g-5">
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <h3 class="text-success text-uppercase">Tender Details </h3>
                    <font style={{ "color": "blue" }} >{output}</font>
                    <form>
                      <div class = "form-control">
                      <label for = "title">Title:</label>
                      <input type="text" class="form-control" value ={title} onChange={(e)=>setTitle(e.target.value)}></input>
                      <b>{title}</b>
                      <br/>
                      <label for = "categoryname">Category Name:</label>
                      <select class ="form-control" value ={catnm} onChange={(e)=>fetchSubCat(e.target.value)}>
                        <option> Select Category:</option>
                        {
                          cDetails.map((row)=>(
                           <option>{row.catnm}</option>
                          ))
                        }
                      </select>
                    
                      <br/>
                      
                      <label for = "subcatnm">Subcategory name:</label>
                      <select class="form-control" value ={subcatnm} onChange={(e)=>setSubCatName(e.target.value)}>
                      <option> Select Sub Category:</option>
                      {
                        scDetails.map((row)=>(
                          <option >{row.subcatnm}</option>
                        ))
                      }
                      </select>
                      <br/>
                      <label for = "description">Description:</label>
                      <input type="text" class="form-control" value ={descp} onChange={(e)=>setDescp(e.target.value)} ></input>
                      <br/>
                      <label for = "baseprice">BasePrice:</label>
                      <input type="text" class="form-control" value ={baseprice} onChange={(e)=>setPrice(e.target.value)}></input>
                      <br/>
                      <label for = "file">Subcategory tender icon</label>
                      <input  type="file" class = "form-control" onChange={handleChange}></input>
                      <br/>
                      <button onClick={handlesubmit} type="button" class = "btn-success">Add Tender</button>
                      </div> 
                    </form>
                </div>
               
            </div>
        </div>
    </div>
    </>
   
  );
}

export default AddTender;
