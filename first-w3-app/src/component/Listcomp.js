import React from 'react'

function Items({listItem})
{
    return <li>{listItem}</li>
}
function Listcomp() {
    let arr =[{id:1,it:"car"}, {id:2,it:"money"},{id:3,it:"house"},{id:4,it:"trips"}]; 
  return (
    <div>
      <>
        <h1>list items!</h1>
        <ul>
            {arr.map((item)=><Items key={item.id} listItem={item.it}></Items>)}
        </ul>
      </>
    </div>
  )
}

export default Listcomp
