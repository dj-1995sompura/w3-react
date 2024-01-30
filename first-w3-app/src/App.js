import "./App.css";
import Listcomp from "./component/Listcomp";
import Props from "./component/Props";


function App() {
  let item = {car:"red", brand:"ford"}

  let clickHandler = (a,b) =>{
    alert(a);
    console.log(b.type);
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <Props color={item} show={true}></Props>
        <button type="button" onClick={(e)=> clickHandler("chutiya",e)}>Click button</button>
        <Listcomp></Listcomp>
      </header>
    </div>
  );
}

export default App;
