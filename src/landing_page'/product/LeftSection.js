export default function LeftSection( { 
    imageUrl,
    productName,
    description,
    tryDemo,
    learnDemo,
    googlePlay,
    appStore}) {
    return (
        <div className="container mt-5 mb-5">
            <div className="row  mb-5 mt-5">
                <div className="col-8 p-3 mt-5 mb-5">
                    <img src={imageUrl} className="mt-5"  />
                </div>
                <div className="col-4 mt-5">
                    <h1 className="mt-5">{productName}</h1>

                    <p className="fs-5 mt-5"> {description} </p>
                    <div class="mb-4">
                    <a href={tryDemo}>tryDemo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnDemo} style={{marginLeft: "80px"}}>learnDemo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                  <div>
                  <a href={googlePlay}><img src="/Assets/google-play-badge.svg" alt="google_play" /></a>
                  <a href={appStore} style={{marginLeft: "50px"}}><img src="/Assets/appstore-badge.svg" alt="app_store"/></a>
                  </div>
                  
                </div>
            </div>
        </div>
    )
}