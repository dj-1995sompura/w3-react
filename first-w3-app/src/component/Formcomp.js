import React,{useState, useEffect} from 'react'

function Formcomp() {
// hooks
const [color, setColor]=useState("Red");
const [feature, newFeature]= useState({
    brand:"ford",
    wight:"300kg",
    material:"lather",
    speed:"400kmph"
});

const [count, setCount]=useState(0);

function updateFeature(){
    newFeature(xFeature=>{
        return {...xFeature, brand:"Audi"}
    });
}

useEffect(()=>{
  let counter = setTimeout(()=>{
    setCount((count)=> count + 1);
  },1000);
  
  return ()=> clearTimeout(counter);
},[]);

  return (
    <div>
      <h1>This is a {color} color</h1>  
      <h1>This is a {count}.</h1>    

      <h1>I have a {feature.brand} car. Its specs like weight {feature.wight}, material {feature.material} and speed {feature.speed}.</h1>


      <button onClick={() => setColor("green")}>change color</button>
      <button onClick={updateFeature}>change brand</button>
     {/* <form>
        <label>Enter your name:
            <input type="text" />
        </label>
    </form> */}
    </div>
  )
}

export default Formcomp;