import React, { useState } from "react";
import edit from "../Assets/images/bxs-edit.svg";
import Minus from "../Assets/images/bx-folder-minus.svg";
import option from "../Assets/images/bx-dots-vertical-rounded.svg"



function Todoitems(props){
    const [Isdone, setIsdon] = useState(false);
    const [showButton, setshowButton] = useState(false);
    const [isEditting, setisEditting] = useState(false);
    
    const [inputValue, setinputValue] = useState(props.text);

    const handleSave = () => {
        props.onEdit(inputValue);
        setisEditting(false);
    }


    const toggleButtons = () => {
       setshowButton(!showButton);
    };

    const hideButtons = () => {
        setshowButton(false);
      };
    
    
    function Cancelitem(){
        setIsdon(prevalue => {
            return !prevalue;
        })
     }



     
    return(
        <div className="task" >
        <input className="checkbox" type="checkbox"></input>
        <li className="task" onClick={Cancelitem} 
        style={{textDecoration: Isdone ? "line-through" :"none"}}>
        {props.text}</li>

         {isEditting ? (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          />
          <button onClick={handleSave}>
                          <span>Add</span>
                      </button>
        </div>
      ) : (
        <div className="option-container">
            {!showButton && (
               <button className="option-button"
              
               onClick={toggleButtons}> <img src={option} alt="" /></button>
            )

            }
             
       
            <div className={`buttons-container ${showButton ? "show" : ""} `}>
                

                <button  className="side-button"
         onClick={() => {
            props.onDeleted(props.id)}}
            ><img onClick={hideButtons} src={Minus}></img></button>

            <button  className="side-button"
         onClick={() => {
             setisEditting(true)}}
    
            >
                <img onClick={hideButtons} src={edit} alt="" />
            </button>
            </div>
       </div>
      )}          
       
       

 </div>
    )
}

export default Todoitems;