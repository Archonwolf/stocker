export default function Pricing() {
    return(
        <div class="container" style={{marginTop: "10%"}}>
            <div class="row">
                <div class="col-5">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#">see pricing  <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="col-7" style={{display: "flex"}}>
                         <img src="/Assets/pricing-eq.svg" style={{width: "25%"}}/>
                         <p style={{fontSize: "10px", paddingTop: "8%", color: "gray"}}>Free account opening</p>
                          <img src="/Assets/pricing-eq.svg"  style={{width: "25%"}}/>
                         <p style={{fontSize: "10px", paddingTop: "8%", color: "gray"}}>Intraday and F&O</p>
                         <img src="/Assets/other-trades.svg"  style={{width: "25%"}} />
                        <p style={{fontSize: "10px", paddingTop: "8%", color: "gray"}}>Free equity delivery and direct mutual funds</p>
                  
                </div>
            </div>
        </div>
    )
}