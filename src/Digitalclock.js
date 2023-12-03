import React, { useState } from "react";
const Digitalclock=()=>{
    let time = new Date().toLocaleString();
    const [Ctime,setCtime]=useState(time);
    const updateTime=()=>{
       time=new Date().toLocaleString();
       setCtime(time);  
    };
    setInterval(updateTime,1000)
 return(
    <>
    <h1>{Ctime}</h1>
    </>
 )
}
export default Digitalclock;