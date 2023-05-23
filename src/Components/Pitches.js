import React, { useState, useEffect } from "react"
import axios from "axios"
import Pitch from "./Pitch";
import './Pitches.css'

export default function Pitches( { pitches }) {


    return (
        <div className="Pitches">
            
                <div className="PitchMap">
                    List of Episodes 
                    {pitches.map((pitch, id) => {
                        return <Pitch key={id} pitch={pitch} index={id}/>;
                    })}
                </div>
                
        </div>
    )
}
