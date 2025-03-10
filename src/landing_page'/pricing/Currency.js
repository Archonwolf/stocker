import Hero from "./Hero.js";
import Brockerage from "./Brockerage.js";

export default function Currency() {
    return (
        <div>
            <Hero/>
            <Brockerage />
            <div className="container" >

            <table class="table text-center border-top mt-5 table-bordered">
                <thead>
                    <tr>
                        <th>   </th>
                        <th>Currency futures</th>
                        <th>Currency options</th>
                    </tr>
                    <tr>
                        <td>Brokerage</td>
                        <td>0.03% or ₹ 20/executed order whichever is lower</td>
                        <td>₹ 20/executed order</td>
                    </tr>
                    <tr>
                        <td>STT/CTT</td>
                        <td>No STT</td>
                        <td>No STT</td>
                    </tr>
                    <tr>
                        <td>Transaction charges</td>
                        <td>NSE: <br></br>
                        Exchange txn charge: 0.00035% <br></br>
                        BSE: <br></br>
                        Exchange txn charge: 0.00045%</td>
                        <td>NSE: <br></br>
                        Exchange txn charge: 0.00035% <br></br>
                        BSE: <br></br>
                        Exchange txn charge: 0.00045%</td>
                    </tr>
                    <tr>
                        <td>GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                         <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td>SEBI charges</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>
                    <tr>
                        <td>Stamp charges</td>
                        <td>0.0001% or ₹10 / crore on buy side</td>
                        <td>0.0001% or ₹10 / crore on buy side</td>
                    </tr>
                </thead>
            </table>
        </div>
        </div>
    )
}