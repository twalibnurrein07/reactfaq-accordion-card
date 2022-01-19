import React,{useState} from "react";
import Zoom from '@mui/material/Zoom';

function Column(props){
    
    const[booelean,setBooelean]=useState("false");

    function handleClick(){
         setBooelean(prevBooelean=>{
             return !prevBooelean
         })
         console.log(booelean);
    }
   
    

    return(
        <div className={props.divclass}>
              <div className="col-12">
                <h6 className={props.h6class} onClick={handleClick}> 
                {props.heading6}
                </h6>
                <Zoom in={booelean}>
                <p className={props.paragraphClass} >
                    {props.paragraph}
                </p>
                </Zoom>
              </div>
            </div>
    )

    
}

export default Column;