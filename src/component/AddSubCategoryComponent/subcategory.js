import './subcategory.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { __categoryapiurl, __subcategoryapiurl } from '../../API_URL';

function Addsubcategory() {

  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [output, setOutput] = useState();
  const [cDetails, setCatDetails] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    var condition_obj = {};
    axios.get(__categoryapiurl + "fetch", {
      params: { condition_obj: condition_obj }
    }).then((response) => {
      // console.log(response.data);
      setCatDetails(response.data);
    }).catch((error) => {
      console.log(error);
    });

  }, []);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('caticon', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(__subcategoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setLoginSuccess(true);
      setOutput("Login successful! Welcome.");
    }).catch((error) => {
      console.log(error);
      setOutput("Sub Category name is already exits....");
    });
  };
  useEffect(() => {
    if (loginSuccess) {
      // Hide toast after 3 seconds
      setTimeout(() => {
        setLoginSuccess(false);
      }, 3000);
    }
  }, [loginSuccess]);

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              {/* Custom Toast Message (Pop-up) */}
              {loginSuccess && (
                <div className="toast-message">
                  <strong>{output}</strong>
                </div>
              )}

              <h3 class="text-success text-uppercase">Add category here!! </h3>
              {/* <font style={{ "color": "blue" }} >{output}</font> */}
              <form>
                <div class="form-group">
                  <label for="catnm">Category Name:</label>
                  <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
                    <option>Select Category</option>
                    {
                      cDetails.map((row) => (
                        <option>{row.catnm}</option>
                      ))
                    }
                  </select>

                  <label for="catnm">Sub Category Name:</label>
                  <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
                </div>
                <br />
                <div class="form-group">
                  <label for="file">Category Icon:</label>
                  <input type="file" class="form-control" onChange={handleChange} />
                </div>
                <br />
                <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Sub Category</button>
              </form>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Addsubcategory;



