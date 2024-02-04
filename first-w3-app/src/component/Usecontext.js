import React,{useState, createContext, useContext} from 'react';

const test= createContext();

function Usecontext() {

    const [user, setUser]= useState("Prashant")
  return (
    <test.Provider value={user}>
       <h1>hello {user}</h1>
       <Comp1></Comp1>
    </test.Provider>
  )
}

function Comp1(){
    return(
        <>
           <h1>component1</h1>
           <Comp2 ></Comp2>
           
        </>
    )
}
function Comp2(){
    return(
        <>
           <h1>component2</h1>
           <Comp3 ></Comp3>
        </>
    )
}
function Comp3(){
    const user = useContext(test)
    return(
        <>
           <h1>component3</h1>
           <h1>hello again {user}</h1>
        </>
    )
}
export default Usecontext
