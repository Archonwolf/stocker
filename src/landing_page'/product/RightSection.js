export default function RightSection({
    imageUrl,
    productName,
    description,
    learnDemo,
}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                <h1 style={{marginTop: "40%"}}>{productName}</h1> 
                <p className="mt-5 mb-3" style={{fontSize: "16px"}}> {description} </p>
                <a href={learnDemo}>learnDemo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-8">
                <img src={imageUrl} style={{paddingLeft: "15%"}} />  
                </div>
            </div>
        </div>
       
    )
}