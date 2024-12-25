import React, {useState} from "react";
import Todoitems from "./items";
import Add from "../Assets/images/bx-list-plus.svg";
import {v4 as uuidv4} from "uuid"; 







const Todoapp = () => {
  
 const [InputText, setINput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null); // Track item being edited


  const [Items, setItems] = useState([])

  const HandleInputClick = () => {
    setInputVisible(true);
  };
  
  function Handlechange(event){
    const Newvalue = event.target.value;
     setINput(Newvalue);
}

const addItem = () => {
  if (InputText.trim() === "") {
    setErrorMessage("Please enter a task");
  } else {
    setItems((prevItems) => [
      ...prevItems,
      { id: uuidv4(), text: InputText },
    ]);
    setINput("");
    setErrorMessage("");
    setInputVisible(false);
    setEditingItemId(null); // Reset editing state
  }
};

const deleteItem = (id) => {
  setItems((prevItems) => prevItems.filter((item) =>
    item.id !== id));
};

const handleEdit = (id, newText) => {
  setItems((prevItems) =>
    prevItems.map((item) => item.id === id ? 
    {...item, text: newText} : item)
  );
};

  
 

{
     } 
    return(
        <div className="home ">
            <header className="header">
                <div className="date">22 dec</div>
                <h1>Good evening <span>To-Do List</span></h1>
                <div className="avatar">👻</div>
            </header>

        <div className="App">
           
          <div id="todo-list-container">
            <h2 className="heading">your tasks</h2>
            {errorMessage && (
                  <p style={{color: "red"}}>{errorMessage}</p>
                  )} 
             
             
             {isInputVisible && (
                   <div>
                        <input onChange={Handlechange} name="input"
                        type="text" value={InputText}></input>
                      <button onClick={addItem}>
                          <span>Add</span>
                      </button>
                  </div>
                )}
                    
              
  
              {Items.length === 0 && (
                <p id="empty-message">your list is empty</p>)}
              
              <ul id="todo-list">
                {Items.map((todoItem) => 
                    (<Todoitems className="task" key = {todoItem.id} 
                      id = {todoItem.id}
                    text = {todoItem.text}
                    onDeleted = {deleteItem}
                    onEdit = {(newText) => handleEdit(todoItem.id, newText)}
                    />))}
                </ul>
                
            </div>
            </div>  

            <button onClick={HandleInputClick}  className="nav-bar">Add Todo<img src={Add}></img></button>
               

        </div>
    )
}

export default Todoapp;