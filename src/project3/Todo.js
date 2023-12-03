import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./Todo.css"
const Todo = () => {
  const [inputlist ,setinputlist]=useState(" ");
  const [items,setitems]=useState([]);
  const itemevent=(event)=>{
setinputlist(event.target.value);
  };
  const listOfItems=()=>{
     setitems((olditems)=>{
      return[...olditems,inputlist];
      });
   setinputlist("");
  };
  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <br/>
            <h1>TODO List</h1>
            <br/>
            <input type='text' placeholder='Add items 'value={inputlist} onChange={itemevent}/>
            <Button onClick={listOfItems}>+</Button>
            <ol>
              {items.map((itemval)=> {
                return <li> {itemval}</li>
              })}

            </ol>
        </div>
    </div>
    </>
  );
}

export default Todo;