import Pitches from "./Pitches"
import React, { useState, useEffect } from "react"
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import '../Components/Index.css'
import Pagination from "./Pagination";

export default function Index() {

    const [pitches, setPitches] = useState([]);
    
    const [searchParams] = useSearchParams();
    let pageNumber = 1
    pageNumber = searchParams.get('page')

    

    

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/pitches?page=${pageNumber}`).then((res) => {
            setPitches(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, [pageNumber]);



  
    return(

        <div className="index">
            <h2>Chronological List of Pitches</h2>
                <Pagination />
                    <Pitches pitches={pitches} />
                <Pagination />
        </div>
        
    )
}