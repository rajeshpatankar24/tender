import './category.css';
import axios  from 'axios';
import { useState,useEffect } from 'react';
import  {__categoryapiurl}  from '../../API_URL';



function Category() {

const [catName,setCatName] =  useState();
const [file,setfile] = useState();
const [output,setoutput]= useState();

const handleChange = (e)=>{
 setfile(e.target.files[0]);
}
const handleSubmit = (e)=>{
  e.preventDefault();
  var formData = new FormData();
  formData.append('catnm',catName);
  formData.append('caticon',file);

  const config = {
    'content-type':'multipart/formData'
  }
 axios.post(__categoryapiurl+"save",formData,config).then(()=>{
 setCatName("");
 setfile("");
 setoutput(" Successfully added");
 }).catch((error)=>{
console.log(error)
setoutput("failed");


 })


}



  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h3 class="text-success text-uppercase">Add category here!! </h3>
              <font style={{ "color": "blue" }} >{output}</font>
              <form>
                <div class="form-group">
                  <label for="catnm">Category Name:</label>
                  <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
                </div>
                <br />
                <div class="form-group">
                  <label for="file">Category Icon:</label>
                  <input type="file" class="form-control" onChange={handleChange} />
                </div>
                <br />
                <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Category</button>
              </form>

            </div>

          </div>
        </div>
      </div>
    </>

  );
}

export default Category;
