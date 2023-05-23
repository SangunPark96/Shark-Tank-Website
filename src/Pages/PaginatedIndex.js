import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function PaginatedIndex() {

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
            <h2>Paginated List of Pitches</h2>
            {pitches.map((pitch) => (
                <div></div>
            ))}
            
        </div>
    )
}