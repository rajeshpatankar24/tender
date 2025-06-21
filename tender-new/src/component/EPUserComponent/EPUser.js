import './EPUser.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { __urlapi } from '../../API_URL';

function EPUser() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [mobile, setMobile] = useState();
   const [address, setAddress] = useState();
   const [city, setCity] = useState();
   const [gender, setGender] = useState();
   const [output,setOutput] = useState();

  useEffect(() => {
    var condition_obj = { "email": localStorage.getItem("email") };
    axios.get(__urlapi + "fetch", {
      params: { condition_obj: condition_obj }
    }).then((response) => {
      // console.log(response.data[0]);
      const user = response.data[0];
        setName(user.name);
        setEmail(user.email);
        setMobile(user.mobile);
        setAddress(user.address);
        setCity(user.city);
        setGender(user.gender);
    }).catch((error) => {
      console.log(error);
    });
  },[]);
  const handleSubmit=()=>{
   
   const update_details ={"condition_obj": {"email":email},"content_obj":{"name":name,"email":email,"mobile":mobile,"address":address,"city":city,"gender":gender}};
    axios.patch(__urlapi+"update",update_details).then((response)=>{
      alert("User updated successfully....");
  })

  }
  

  return (
    <>
   <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                <h1 class="display-5 mb-4">Edit <span class="text-success"> profile here!!!</span></h1>
              
                <font color="green">{output}</font>
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name"  onChange={e => setName(e.target.value)} value={name} />
              </div>
              <br />
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id = "email" onChange={e => setEmail(e.target.value)} value={email} />
              </div>
              <br />
             
              <div class="form-group">
                <label for="mobile">Mobile:</label>
                <input type="text" class="form-control" id = "mobile" onChange={e => setMobile(e.target.value)} value={mobile} />
              </div>
              <br />
              <div class="form-group">
                <label for="address">Address:</label>
                <textarea rows="3" class="form-control" id = "address" onChange={e => setAddress(e.target.value)} value={address} ></textarea>
              </div>
              <br />
              <div class="form-group">
                <label for="city">City:</label>
                <select class="form-control" onChange={e => setCity(e.target.value)} value={city} >
                  <option>Select City</option>
                  <option>Indore</option>
                  <option>Bhopal</option>
                  <option>Jabalpur</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                Gender: <label for="m"> Male&nbsp;&nbsp;</label>
                <input  type="radio" name = "gender" id = "m" onChange={e=>setGender(e.target.value)} value="male" ></input>&nbsp;&nbsp;
                 <label for="f"> Female&nbsp;&nbsp;</label>
                 <input  type="radio" name = "gender" id = "f" onChange={e=>setGender(e.target.value)} value="female" ></input>&nbsp;&nbsp;
              </div>
              <br />
              <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
            </form>              
                </div>
               
            </div>
        </div>
    </div>
    </>
   
  );
}

export default EPUser;
