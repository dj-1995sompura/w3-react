import React,{useState, useRef, useEffect} from 'react'

function Useref() {
    const [inputvalue, setInputvalue]= useState("");
    const count= useRef(0);

    const inputElement = useRef();

    const onfocus=()=>{
        inputElement.current.focus();  
    };

    const prevInputvalue = useRef("");

useEffect(()=>{
    count.current= count.current + 1;
    prevInputvalue.current= inputvalue
},[inputvalue]);

  return (
    <div>
      <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}></input>
      <p>Total word is: {count.current}</p>
      <h1>use Ref to direct manipulate DOM</h1>
      <input type="text" ref={inputElement}></input>
      <button onClick={onfocus}>Focus</button>
      <h1>print previous value of prop</h1>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <h2>Current Value: {inputvalue}</h2>
      <h2>Previous Value: {prevInputvalue.current}</h2>  
    </div>
  )
}

export default Useref
