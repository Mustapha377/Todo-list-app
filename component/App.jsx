import React, { useState } from "react";
import Todoapp from "./todoApp";
import EditApp from "./EditPage";
import { BrowserRouter as Router, Routes, Route,Link}  from "react-router-dom";


function App(){
  

    return (
        <Router>
          <Routes>
            <Route path="/" element={<Todoapp/>}/>
            <Route path="Editpage" element={<EditApp/>}/> 
         </Routes>  
       </Router>
    )
}
export default App;