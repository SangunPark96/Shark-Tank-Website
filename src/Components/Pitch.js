import { Link } from "react-router-dom"
import './Pitch.css'

export default function Pitch({ pitch, id }) {
    return (
        <div className="PitchCell">
            <div>
                <h1>S{pitch.season_number}:E{pitch.episode_number}</h1>
                {pitch.got_deal === "1" ? <p>✅</p> : <p>❌</p>} <strong>{pitch.business_description}</strong>
                <p>Entrepreneur {pitch.entrepreneur_names} was asking for ${pitch.original_ask_amount} for {pitch.original_offered_equity}% of {pitch.startup_name}</p>
                {!pitch.company_website ? null : <a href={pitch.company_website} className="product-link">{pitch.company_website}</a>}
                <br/>
                <br></br>
                <Link className='seeMore' to={`/pitches/${pitch.id}`}> See More</Link> 
            </div>

        </div>
    )
}