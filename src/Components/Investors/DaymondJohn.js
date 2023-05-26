import { useEffect, useState } from "react";
import axios from "axios";
import Daymond from '../../Assests/daymond-john.jpeg'


export default function DaymondJohn() {
    const [pitches, setPitches] = useState([]);
    let totalInvestments = 0
    let totalMoneySpent = 0
    let daymondVists = 0
    let arr = []
    let sum  = 0;
   

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/investments`).then((res) => {
            setPitches(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

    for (let i = 0; i < pitches.length; i++){
        if( pitches[i].daymond_john_investment_amount > 0){
            totalInvestments += 1
            totalMoneySpent += Number(pitches[i].daymond_john_investment_amount)
            
            arr.push(pitches[i].daymond_john_investment_amount)
        }
        if ( pitches[i].daymond_john_present > 0){
            daymondVists += 1
        }
    }
    for (let i = 0; i < arr.length; i++){
        sum += Number(arr[i])
    }
  
    let average = sum / arr.length
   
    console.log(daymondVists)

// console.log(totalMoneySpent)

    return(
        <div className="shark-cell">
            <img alt="daymond" src={Daymond} height={300} width={500}></img>
            <h1>Daymond John</h1>
            <p>Total Number of Deals Made: <strong>{totalInvestments}</strong></p>
            <p>Total Dollars Invested: 
                <> {totalMoneySpent.toLocaleString('en-US', {
                                                                    style: 'currency',
                                                                    currency: 'USD',
                                                                })}
                </>
            </p>
            <p>Average Investment Amount: {average.toLocaleString('en-US', {
                                                                    style: 'currency',
                                                                    currency: 'USD',
                                                                })}</p>
            <p>Total Appearances: {daymondVists}</p>

        </div>
    )
}