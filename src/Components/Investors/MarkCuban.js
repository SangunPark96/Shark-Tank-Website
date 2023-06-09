import { useEffect, useState } from "react";
import axios from "axios";
import Cuban from '../../Assests/mark-cuban.jpeg'


export default function MarkCuban() {
    const [pitches, setPitches] = useState([]);
    let totalInvestments = 0
    let totalMoneySpent = 0
    let cubanVisits = 0
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
        if( pitches[i].mark_cuban_investment_amount > 0){
            totalInvestments += 1
            totalMoneySpent += Number(pitches[i].mark_cuban_investment_amount)
            arr.push(pitches[i].mark_cuban_investment_amount);
        }
        if ( pitches[i].mark_cuban_present > 0){
            cubanVisits += 1
        }
       
    }
     for (let i = 0; i < arr.length; i++){
        sum += Number(arr[i])
    }
  
    let average = sum / arr.length
    console.log(average)
    console.log(cubanVisits)
    

console.log(totalMoneySpent)

    return(
        <div className="shark-cell">
            <h1>Mark Cuban</h1>
            <img alt="cuban" src={Cuban} height={300} width={400}></img>
            
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
            <p>Total Appearances: {cubanVisits}</p>

        </div>
    )
}