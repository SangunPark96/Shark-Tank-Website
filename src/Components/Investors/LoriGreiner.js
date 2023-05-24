import { useEffect, useState } from "react";
import axios from "axios";
import Lori from '../../Assests/lori.png'


export default function LoriGreiner() {
    const [pitches, setPitches] = useState([]);
    let totalInvestments = 0
    let totalMoneySpent = 0
    let loriVisits = 0
   

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
            totalMoneySpent += Number(pitches[i].lori_greiner_investment_amount)
            loriVisits += Number(pitches[i].lori_greiner_present)
        }
    }

console.log(totalMoneySpent)

    return(
        <div className="shark-cell">
            <img alt="lori" src={Lori} height={400} width={600}></img>
            <h1>Lori Greiner</h1>
            <p>Total Number of Deals Made: <strong>{totalInvestments}</strong></p>
            <p>Total Dollars Invested: 
                <> {totalMoneySpent.toLocaleString('en-US', {
                                                                    style: 'currency',
                                                                    currency: 'USD',
                                                                })}
                </>
            </p>
            <p>Total Appearances: {loriVisits}</p>

        </div>
    )
}