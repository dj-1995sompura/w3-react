import "./App.css";
import Person from "./component/Classcomponent";
import Brand from "./component/Component";



function App() {
  // const myelement = (
  //   <table>
  //     <tr>
  //       <th>Name</th>
  //     </tr>
  //     <tr>
  //       <td>John</td>
  //     </tr>
  //     <tr>
  //       <td>Elsa</td>
  //     </tr>
  //   </table>
  //   );
  return (
    <div className="App">
      <header className="App-header">
      {/* {myelement}
      <h1>{3+5}</h1> */}
      <Brand></Brand>
      <Person age="30"></Person>
      </header>
    </div>
  );
}

export default App;
