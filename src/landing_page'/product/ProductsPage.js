import Hero from "./Hero";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import Universe from "./Universe.js";

export default function ProductsPage(){
    return(
        <div>
            <Hero />
            <LeftSection
            imageUrl="/Assets/products-kite.png"
            productName="Kite"
            description="Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly 
            on your Android and iOS devices." 
            tryDemo="Try demo"
            learnDemo="Learn More " 
            googlePlay="" 
            appStore="" 
            />
            <RightSection 
             imageUrl="/Assets/products-console.png"
             productName="Console"
             description="The central dashboard for your Zerodha account. Gain insights into
              your trades and investments with in-depth reports and visualisations." 
             learnDemo="Learn More "  
             />
            <LeftSection
            imageUrl="/Assets/products-coin.png"
            productName="Coin"
            description="Buy direct mutual funds online, commission-free, delivered directly 
            to your Demat account. Enjoy the investment experience on your Android and iOS 
            devices." 
            tryDemo="Try demo"
            learnDemo="Learn More " 
            googlePlay="" 
            appStore="" 
            />
            <RightSection
            imageUrl="/Assets/products-kiteconnect.png"
            productName="Kite Connect API"
            description="Build powerful trading platforms and experiences with our super
             simple HTTP/JSON APIs. If you are a startup, build your investment app and 
             showcase it to our clientbase."
             learnDemo="Learn More " 
            />
            <LeftSection
            imageUrl="/Assets/varsity-products.png"
            productName="Varsity mobile"
            description="An easy to grasp, collection of stock market lessons with in-depth
             coverage and illustrations. Content is broken down into bite-size cards to help 
             you learn on the go." 
            tryDemo="Try demo"
            learnDemo="Learn More " 
            googlePlay="" 
            appStore="" 
            />

            <Universe />
        </div>
    )
}