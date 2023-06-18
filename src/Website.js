import React from "react";
import Carousel from './Carousel';
import Search from "./component/loupe.png";
import slides from "./data/carouselData.json";
import Card_api from "./Card_api";
export default function Website() {
   const[inputdata,setinputdata]=React.useState("");
   function handlechange(event) {
     console.log(inputdata)
    setinputdata(event.target.value)  
   }
   function handleclick(event){
    event.preventDefault();
    console.log(inputdata)
   }
  
    return(
        <>
        <nav>
            
            <div className="icon">Contest_<b style={{color: 'green'}}>i</b>nfo</div>
            <form   onSubmit={handleclick}>
                <div className="searchbox">
                <input id="input"type="text" placeholder="Search here" onChange={handlechange}
                
              />
                </div>
                <img src={Search}  onClick={handleclick} id="search_img" alt="search"/>
            </form>
        </nav>
        <Carousel data={slides}/>
        <Card_api />
        </>
    )
}