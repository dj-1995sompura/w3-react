import "./App.css";
import Formcomp from "./component/Formcomp";
import Usecontext from "./component/Usecontext";
import Useeffect from "./component/Useeffect";
import Usereducer from "./component/Usereducer";
import Useref from "./component/Useref";



function App() {
  // let item = {car:"red", brand:"ford"}

  // let clickHandler = (a,b) =>{
  //   alert(a);
  //   console.log(b.type);
  // }

  
  return (
    <div className="App">
      <header className="App-header">
        <Formcomp></Formcomp>
        <Useeffect></Useeffect>
        <br>
        </br>
        <Usecontext></Usecontext>
        <Useref></Useref>
        <Usereducer></Usereducer>
      </header>
    </div>
  );
}

export default App;
