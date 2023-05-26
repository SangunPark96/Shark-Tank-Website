import { useEffect, useState } from "react";
import axios from "axios";
import Kevin from '../../Assests/kevin-oleary.jpeg'


export default function KevinOLeary() {
    const [pitches, setPitches] = useState([]);
    let totalInvestments = 0
    let totalMoneySpent = 0
    let kevinVists = 0
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
        if( pitches[i].kevin_o_leary_investment_amount > 0){
            totalInvestments += 1
            totalMoneySpent += Number(pitches[i].kevin_o_leary_investment_amount)
            
            arr.push(pitches[i].kevin_o_leary_investment_amount)
        }
        if ( pitches[i].kevin_o_leary_present > 0){
            kevinVists += 1
        }
    }
    for (let i = 0; i < arr.length; i++){
        sum += Number(arr[i])
    }
  
    let average = sum / arr.length
   
    console.log(kevinVists)

// console.log(totalMoneySpent)

    return(
        <div className="shark-cell">
            <img alt="kevin" src={Kevin} height={300} width={500}></img>
            <h1>Kevin O'Leary</h1>
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
            <p>Total Appearances: {kevinVists}</p>

        </div>
    )
}