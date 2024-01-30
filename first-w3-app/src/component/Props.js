import React from 'react'

function Comp1(){
    return <h1>First Comp!</h1>
}
function Comp2(){
    return <h1>Second Comp!</h1>
}

// function Showcomp(prop){
//     if(prop.show){
//         return <Comp2></Comp2>
//     }else{
//         return<Comp1></Comp1>
//     }
// }

function Props({color,show}) {  
  return (
    <div>
        {/* <Showcomp show={show}></Showcomp> */}
        {/* {show && <Comp2></Comp2>} */}
        {show ? <Comp2></Comp2>: <Comp1></Comp1>}
        <h1>My favorite color is {color.brand}!</h1>
    </div>
  )
}

export default Props
