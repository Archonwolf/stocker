import Openaccount from "../../Openaccount";
import Trust from "./Trust";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";




export default function HomePage() {
    return (
        <div>
           
            <Hero /> 
            <Trust />
            <Pricing />  
            <Education />
            <Openaccount />
          

        </div>
    )
}