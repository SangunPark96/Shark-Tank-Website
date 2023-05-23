import { Link, useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import './PitchDetails.css'

export default function PitchDetails() {

const [pitch, setPitch] = useState({})
let { id } = useParams();
const navigate = useNavigate();
            

useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/pitches/${id}`)
    .then((res) => {
      console.log(res)
      setPitch(res.data[0]);
    }).catch((e) => {
      console.log(e);
      navigate("/not-found")
    });
  }, [id, navigate]);


    
    return(
            <main className="pitch_details">
                <div>
                    <h2>{pitch.business_description}</h2>
                    <h4>Air Date: {pitch.original_air_date}</h4>
                    <h4>Entrepreneur: {pitch.entrepreneur_names} from {pitch.pitchers_city}, {pitch.pitchers_state}</h4>
                    <p>Initial Ask: ${pitch.original_ask_amount} for {pitch.original_offered_equity}%</p>
                    {pitch.got_deal > 0 ? <p>This business received a deal for ${pitch.total_deal_amount} for {pitch.total_deal_equity}% giving the company an approximate valuation of ${pitch.deal_valuation}</p> : <p>This business did not manage to secure a deal with the sharks.</p>}
                </div>

                <div>
                    <Link to={`/pitches`}>
                        <button>Back</button>
                    </Link>
                </div>
            </main>
    )
}