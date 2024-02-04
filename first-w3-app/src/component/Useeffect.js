import React,{useState, useEffect} from 'react'

function Useeffect() {
    const [count, setCount] = useState(0);
    const [calc, setCalc]=useState(0);

    useEffect(()=>{
        setCalc(()=> count * 2);
    },[count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setCount((count)=>count + 1)}>+</button>
      <h1>{calc}</h1>
    </div>
  )
}

export default Useeffect
