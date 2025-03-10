export default function Hero() {
    return(
        <div class="bg bg-primary text-white mb-5">
           <div class="container">
            <div class="row"> 
             <div class="col-7 mb-5">
                <h4 class="mt-5">Support Portal</h4> <br></br> <br></br>
                <h4>Search for an answer or browse help topics to create a ticket</h4>

                <form class="form-inline">
                    <div class="d-flex"> 
                    <input id="search-text" type="text" class="form-control"
                     autocomplete="off" placeholder="Eg: how do i activate F&amp;O, why
                      is my order getting rejected ..." autofocus=""/>                    
                    <button class="border-white rounded-right bg-white p-0 m-0"><i class="fa-solid fa-magnifying-glass bg-light">
                    </i></button>
                    </div>
                </form>
                <a href="#" style={{color: "white"}} class="p-2 fs-5 ">Track account opening</a>
                <a href="#" style={{color: "white"}} class="p-2 fs-5">Track segment activation</a>
                <a href="#" style={{color: "white"}} class="p-2 fs-5">Intradey margin</a> <br></br>
                <a href="#" style={{color: "white"}} class="p-2 fs-5 ">kite user manual</a>
            </div>
            <div class="col-5 mt-4">
                <a href="#" style={{color: "white", paddingLeft: "65%"}} class=" fs-5 ">Track tickets</a>
                <h3 class="mt-5">Features</h3>
                <ol class="mt-2">
                <li><a href="#" style={{color: "white"}} >Rights Entitlements listing in October 2024</a></li>
                <br></br>
             <li> <a href="#"style={{color: "white"}} >Surveillance measure on scrips - October 2024</a> </li>
                </ol>    
            </div>

           </div> 
        </div>
        </div>
    )
}