import Pitches from "./Pitches"
import React, { useState, useEffect } from "react"
import axios from "axios";


export default function Index() {

    const [pitches, setPitches] = useState([]);
   

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/pitches`).then((res) => {
            setPitches(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

   
  
    return(
        <div className="index">
            <h2>Chronological List of Pitches</h2>
            <Pitches pitches={pitches} />
            
        </div>
    )
}