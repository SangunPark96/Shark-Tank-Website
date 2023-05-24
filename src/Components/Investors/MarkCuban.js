import { useEffect, useState } from "react";
import axios from "axios";


export default function MarkCuban() {
    const [pitches, setPitches] = useState([]);
    let totalInvestments = 0
    let totalMoneySpent = 0
   

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/investments`).then((res) => {
            setPitches(res.data)
        }).catch((e) => {
            console.log({ error: {e}})
        })
    }, []);

    for (let i = 0; i < pitches.length; i++){
        if( pitches[i].mark_cuban_investment_amount > 0){
            totalInvestments += 1
            totalMoneySpent += Number(pitches[i].mark_cuban_investment_amount)
        }
    }

console.log(totalMoneySpent)

    return(
        <div className="shark-cell">
            <h1>Mark Cuban</h1>
            <p>Total Number of Deals Made: <strong>{totalInvestments}</strong></p>
            <p>Total Dollars Invested: <strong>${totalMoneySpent.toFixed(2)}</strong></p>

        </div>
    )
}