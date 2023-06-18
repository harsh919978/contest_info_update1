import React from "react";
import "./Card.css";
export default function Card(props) {
    let val=0
    function calculate_time(time)
    {
        val=(time/60)/60
        val.toFixed(2);
    }
   
  return (
    <>
      <div className="cardList" >
        <div className="cardCard">
            <img src="https://repository-images.githubusercontent.com/197286184/a1437300-cfaf-11ea-8ae2-878edf7871e5" alt="image" className="cardImage" />
            <div className='card_content'>
                <h3 className="cardName">Platform: {props.site}</h3>
    
            </div>
            <div className="card_ul">
                <ul>
                    <li>Name:{props.name}</li>
                    <li>status:{props.status}</li>
                    <li>In_24_hours:{props.in_24_hours}</li>
                    <li>Start_time:{props.start_time}</li>
                    <li>End_time:{props.end_time}</li>
                    <li>Duration:{calculate_time(props.duration)}{val} hr</li>
                </ul>
                <a href={props.url}>Visit</a>
            </div>
              
        </div>
      </div>
    </>
  );
}
