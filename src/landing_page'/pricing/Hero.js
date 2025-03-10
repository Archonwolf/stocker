export default function Hero() {
    return(
        <div className="container mt-5">
             <div className="row text-center">
            <h1 className="fs-1 mt-5">Charges</h1>
            <p className="fs-4 text-muted" style={{marginBottom: "12%"}}>List of all charges and taxes</p>
           
                <div className="col-4 mt-5">
                    <img src="/Assets/pricing-eq.svg" style={{height: "45%"}} />
                    <h1 className="mb-4" style={{fontSize: "2rem"}}>Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0
                         brokerage.</p>
                </div>
                <div className="col-4 mt-5">
                    <img src="/Assets/other-trades.svg" style={{height: "45%"}}/>
                    <h1 className="mb-4" style={{fontSize: "2rem"}}>Intraday and F&O trades</h1>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday
                         trades across equity, currency, and commodity trades. Flat ₹20 on 
                         all option trades.</p>
                </div>
                <div className="col-4 mt-5">
                    <img src="/Assets/pricing-eq.svg" style={{height: "45%"}} />
                    <h1 className="mb-4" style={{fontSize: "2rem"}}>Intraday and F&O trades</h1>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP 
                        charges.</p>
                </div>
            </div>
        </div>
    )
}