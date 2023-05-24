import leftArrow from '../Assests/left.png'
import rightArrow from '../Assests/right.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import './Pagination.css'

export default function Pagination() {

    const [investments, setInvestments] = useState([]);
    const [searchParams] = useSearchParams();
    let pageNumber = 1
    pageNumber = searchParams.get('page')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/investments`).then((res) => {
            setInvestments(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

    let totalNumberOfPages = Math.floor(investments.length / 20)
    let lastPage = (Number(pageNumber) - 1)
    let lastlastPage = (Number(pageNumber) - 2)
    let nextPage = (Number(pageNumber) + 1)
    let nextnextPage = (Number(pageNumber) + 2)

    return (
        <div className="pagination-station">
            
            <button className="firstPage" ><a href={"/pitches?page=" + 0}><img src={leftArrow} alt="left-arrow" height={20} width={20}></img></a></button>

            <button className="backButton" ><a href={"/pitches?page=" + (Number(pageNumber) - 1)}><img src={leftArrow} alt="left-arrow" height={20} width={20}></img></a></button>
<div className='numbers'>

                {Number(pageNumber) === 0 ? <>

                <ul class="currentPage">
                    <a href={"/pitches?page=" + pageNumber}><span class="currentPage">{pageNumber}</span></a>
                </ul></> : null}

                {Number(pageNumber) === 1 ? <>
                <ul class="lastPage">
                    <a href={"/pitches?page=" + lastPage}><span class="pageNumber">{lastPage}</span></a>
                </ul>

                <ul class="currentPage">
                    <a href={"/pitches?page=" + pageNumber}><span class="currentPage">{pageNumber}</span></a>
                </ul></> : null}

                {Number(pageNumber) === 2 ? <>

                <ul class="lastlastPage">
                    <a href={"/pitches?page=" + lastlastPage}><span class="pageNumber">{lastlastPage}</span></a>
                </ul>
                
                <ul class="lastPage">
                    <a href={"/pitches?page=" + lastPage}><span class="pageNumber">{lastPage}</span></a>
                </ul>

                <ul class="currentPage">
                    <a href={"/pitches?page=" + pageNumber}><span class="currentPage">{pageNumber}</span></a>
                </ul></> : null}
              
                {Number(pageNumber) > 2 ? <>

                <ul class="lastlastPage">
                    <a href={"/pitches?page=" + lastlastPage}><span class="pageNumber">{lastlastPage}</span></a>
                </ul>

                <ul class="lastPage">
                    <a href={"/pitches?page=" + lastPage}><span class="pageNumber">{lastPage}</span></a>
                </ul>

                <ul class="currentPage">
                    <a href={"/pitches?page=" + pageNumber}><span class="currentPage">{pageNumber}</span></a>
                </ul></> : null}

                <ul class="nextPage">
                    <a href={"/pitches?page=" + nextPage}><span class="pageNumber">{nextPage}</span></a>
                </ul>

                <ul class="nextnextPage">
                    <a href={"/pitches?page=" + nextnextPage}><span class="pageNumber">{nextnextPage}</span></a>
                </ul>
                <ul>
                    ...
                </ul>
                <ul class="lastPage">
                    <a href={"/pitches?page=" + totalNumberOfPages}><span class="pageNumber">{totalNumberOfPages}</span></a> 
                </ul>
                <ul> 

                </ul>
</div>                
                <button className="forwardButton" ><a href={"/pitches?page=" + (Number(pageNumber) + 1)}><img src={rightArrow} alt="right-arrow" height={20} width={20}></img></a></button>
                
                <button className="lastPage" ><a href={"/pitches?page=" + 63}><img src={rightArrow} alt="right-arrow" height={20} width={20}></img></a></button>
            </div>
    )
}