import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Add from "../Assets/images/bx-list-plus.svg";



const EditApp = () => {
   const navigate = useNavigate();

   const goToHome = () => {
    navigate("/")
   }

  const [InputText, setINput] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  function Handlechange(event){
    const Newvalue = event.target.value;
     setINput(Newvalue);
}

function addItem() {
  if (InputText.trim() === "") { // Check if input is empty
    // Display a message (you can choose how to display it, e.g., alert, console, or using a UI element)
    setErrorMessage("please enter a task")
  } else { 
    setItems((prevItems) => {
      return [...prevItems, InputText];
    });
    setINput(""); // Clear the input field
    setErrorMessage("") //clear the erro message
  }
}

   

    return(
        <div className="home ">
            <header className="header">
                <div className="date">22 dec</div>
                    <h1>Good evening <span>To-Do List</span></h1>
                <div className="avatar">👻</div>
            </header>

            <div className="App">
                <div className="">
                    
                    <input onChange={Handlechange} name="input" type="text" value={InputText}></input>
                    <button onClick={addItem}>
                        <span>Add</span>
                    </button>
                    {errorMessage && (
                    <p style={{color: "red"}}>{errorMessage}</p>
                    )} 
                </div>
                    <div id="todo-list-container">
                        <h2 className="heading">your tasks</h2>
                    </div>  

                   
            </div> 
            <div onClick={goToHome} 
                    className="nav-bar">Add Todo<img src={Add}></img></div>
       </div>
    )
};

export default EditApp;