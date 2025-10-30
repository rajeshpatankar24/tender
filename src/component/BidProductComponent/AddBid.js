import './AddBid.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __bidproductapiurl, __productapiurl } from '../../API_URL';
import { useParams, useNavigate } from 'react-router-dom';

function AddBid() {
  const params = useParams();
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [pDetails, setProductDetails] = useState([]);
  const [cPrice, setCurrentPrice] = useState([]);
  const [BidPrice, setBidPrice] = useState();
  const [timeLeft, setTimeLeft] = useState(""); // State to hold the remaining time
  const [auctionEnded, setAuctionEnded] = useState(false); // Track if auction has ended

  useEffect(() => {
    // Fetch product details
    axios.get(__productapiurl + "fetch?_id=" + params._id).then((response) => {
      setProductDetails(response.data[0]);
    }).catch((error) => {
      console.log(error);
    });

    // Fetch current bid prices
    axios.get(__bidproductapiurl + "fetch?p_id=" + params._id).then((response1) => {
      var min_bidprice = response1.data[0].bidprice;
      for (let row of response1.data) {
        if (min_bidprice < row.bidprice) {
          min_bidprice = row.bidprice;
        }
      }
      setCurrentPrice(min_bidprice);
    }).catch((error) => {
      setCurrentPrice(pDetails.baseprice);
    });

    // Start countdown timer if info exists in pDetails
    if (pDetails.info) {
      const countdownInterval = setInterval(() => {
        const endTime = new Date(pDetails.info); // Assuming `info` contains the end time in string format
        const currentTime = new Date();
        const timeDiff = endTime - currentTime; // Time difference in milliseconds

        if (timeDiff <= 0) {
          clearInterval(countdownInterval);
          setTimeLeft('Auction Ended');
          setAuctionEnded(true); // Mark auction as ended
        } else {
          const hours = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000); // Update every second

      // Cleanup the interval when component unmounts or pDetails changes
      return () => clearInterval(countdownInterval);
    } else {
      setTimeLeft("Auction end time not available.");
    }

  }, [pDetails]); // Re-run the effect whenever pDetails changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // If the auction has ended, don't allow bidding
    if (auctionEnded) {
      setOutput("Sorry, the auction has ended.");
      return;
    }

    // Check if the bid price is empty or invalid
    if (!BidPrice || isNaN(BidPrice) || parseInt(BidPrice) <= 0) {
      setOutput("Please enter a valid bid price.");
      return; // Do not submit if the input is invalid
    }

    var bidDetails = { "p_id": params._id, "u_id": localStorage.getItem("email"), "bidprice": parseInt(BidPrice) };
    axios.post(__bidproductapiurl + "save", bidDetails).then((response) => {
      alert("Bid implemented successfully....");
      setOutput("Bid implemented successfully....");
      setBidPrice("");
      navigate("/bidproduct/" + params._id);
    }).catch((error) => {
      setOutput("Unable to bid, please try again....");
      setBidPrice("");
    });
  };

  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="text-primary text-uppercase"> Bid here!!!</h4>
              <font class="output-text">{output}</font>

              <table class="table table-bordered">
                <tr>
                  <td><b>ProductID :</b></td>
                  <td>{pDetails._id}</td>
                </tr>
                <tr>
                  <td><b>Title :</b></td>
                  <td>{pDetails.title}</td>
                </tr>
                <tr>
                  <td><b>Category :</b></td>
                  <td>{pDetails.catnm} - {pDetails.subcatnm}</td>
                </tr>
                <tr>
                  <td><b>Base Price :</b></td>
                  <td>&#8377;{pDetails.baseprice}</td>
                </tr>
                <tr>
                  <td><b>Auction Current Price :</b></td>
                  <td>&#8377;{cPrice}</td>
                </tr>

                {/* Displaying Remaining Time */}
                <tr>
                  <td><b>Remaining Time for Auction :</b></td>
                  <td>{timeLeft}</td>
                </tr>

                <tr>
                  <td><b>Enter Your Bid Price :</b></td>
                  <td>
                    <form>
                      <input
                        type="text"
                        class="form-control"
                        value={BidPrice}
                        onChange={e => setBidPrice(e.target.value)}
                        disabled={auctionEnded} // Disable input if auction has ended
                      />
                      <br />
                      <button
                        onClick={handleSubmit}
                        type="button"
                        class="btn btn-bid"
                        disabled={auctionEnded} // Disable button if auction has ended
                      >
                        Bid Product
                      </button>
                    </form>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBid;
