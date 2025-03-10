import Brockerage from "./Brockerage";
import Hero from "./Hero.js";

export default function Equity() {
    return(
        <div className="container">
            <Hero/>
            <Brockerage/>
            <table class="table border-top text-center mt-5 table-bordered">
                <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Equity delivery</th>
                    <th scope="col">Equity intraday</th>
                    <th scope="col">F&O - Futures</th>
                    <th scope="col">F&O - Options</th>
                 </tr>
                </thead>
                <tbody>
                    <tr class="text-muted text-center">
                    <td>Brokerage</td>
                    <td>Zero Brokerage</td>
                    <td>0.03% or Rs. 20/executed <br></br>order whichever is lower</td>
                    <td>0.03% or Rs. 20/executed <br></br>order whichever is lower</td>
                    <td>Flat Rs. 20 per executed order</td>
                    </tr>
                    <tr>
                        <td>STT/CTT</td>
                        <td>0.1% on buy & sell</td>
                        <td>0.025% on the sell side</td>
                        <td>0.02% on the sell side</td>
                        <td><ul><li> 0.0125% of the intrinsic value on <br></br>options that are bought and
                        <br></br> exercised</li>
                        <li>0.1% on sell side (on premium)</li></ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Transaction <br></br>charges </td>
                        <td>NSE: 0.00297% <br></br>
                        BSE: 0.00375%</td>
                        <td>NSE: 0.00297% <br></br>
                        BSE: 0.00375%</td>
                        <td>NSE: 0.00173% <br></br>
                        BSE: 0</td>
                        <td>NSE: 0.03503% (on premium) <br></br>
                        BSE: 0.0325% (on premium)</td>
                    </tr>
                    <tr>
                        <td>GST</td>
                        <td>8% on (brokerage + SEBI<br></br>charges + transaction 
                        <br></br>charges)</td>
                        <td>8% on (brokerage + SEBI<br></br>charges + transaction 
                            <br></br>charges)</td>
                            <td>8% on (brokerage + SEBI<br></br>charges + transaction 
                                <br></br>charges)</td>
                                <td>8% on (brokerage + SEBI charges +<br></br> transaction 
                                charges)</td>
                    </tr>
                    <tr>
                        <td>SEBI charges</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>
                    <tr>
                        <td>Stamp charges</td>
                        <td>0.015% or ₹1500 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                        <td>0.002% or ₹200 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
           
        </div>
    )
}