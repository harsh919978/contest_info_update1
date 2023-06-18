import React from "react";
import Card from "./Card";
import "./Card.css";
export default function Card_api(){
    const[apidata,setapidata]=React.useState([]);

    React.useEffect(()=>{
        fetch("https://kontests.net/api/v1/all")
        .then(res=> res.json())
        .then(data=> setapidata(data))

    },[])

   let arr=[];
   if(apidata.length!==0)
   {
    { apidata.map((item)=>
        arr.push(item) 
        )}
    }
    
    return(
        <>
        <div className="parent">
         {arr.map((item,idx)=>
         (
            <Card
            key={idx}
            name={item.name}
            start_time={item.start_time}
            duration={item.duration}
            site={item.site}
            url={item.url}
            status={item.status}
            in_24_hours={item.in_24_hours}
            end_time={item.end_time}

            />
            
         ))}
         </div>
     </>
    )
}