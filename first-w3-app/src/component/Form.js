import React,{useState} from 'react'

function Form() {
    const [name, setName]= useState("")
  return (
    <div>
      <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>
      </label>
    </form>
    </div>
  )
}
export default Form