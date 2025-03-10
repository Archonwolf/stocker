import { Link } from "react-router-dom"


export default function Brockerage() {
    return(
        <div>
           <div className="container border-bottom">
            <Link class="brockerage"  to="/Pricing/Equity">Equity</Link>
            <Link class="brockerage"  to="/Pricing/Currency">Currency</Link>
            <Link class="brockerage"  to="/Pricing/Commodity">Commodity</Link>
            
            </div> 
        </div>
    )
}