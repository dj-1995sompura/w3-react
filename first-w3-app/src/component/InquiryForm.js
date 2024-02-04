import React,{useState} from "react";
import './inquiryform.css'

function InquiryForm() {
 const [formdata, setFormdata]= useState({
    name:"",
    email:"",
    message:""
 });

const [error,setError] = useState({});
const [addclass, setAddclass]= useState("");

 const handleFormdata = (e) =>{
    const {name, value} = e.target;
    setFormdata({...formdata,[name]:value});
    console.log(formdata);

    setError({...error, [name]:''});

 }


  const handleSubmit = (e) =>{
    e.preventDefault();

    setAddclass("showError")
    // alert("Form Submitted Successfully!")

    const newError ={};
    if(!formdata.name.trim()){
        newError.name = "Name is required."
    }

    if(!formdata.email.trim()){
        newError.email = "Email is required."
    }else if(!/^\S+@\S+\.\S+$/.test(formdata.email)){
        newError.email = "Email is invalid."
    }
    if(!formdata.message.trim()){
        newError.message = "Message is required."
    }


    if(Object.keys(newError).length > 0){
        setError(newError)
    }else{
        alert("Form submitted successfully");
        setFormdata({
            name:"",
            email:"",
            message:""
        });
        setError({});
    }

  } 
    
  return (
    <>
      <form action="#" method="post">
        <h3 className="heading">Inquiry form</h3>
        <p>Add your details below:</p>  
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className={addclass} name="name" value={formdata.name} onChange={handleFormdata} required />
        {error.name && <span style={{color:"red"}}>{error.name}</span>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className={addclass} value={formdata.email} onChange={handleFormdata} required />
        {error.email && <span style={{color:"red"}}>{error.email}</span>}    
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" className={addclass} value={formdata.message} onChange={handleFormdata} required></textarea>
        {error.message && <span style={{color:"red"}}>{error.message}</span>}

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default InquiryForm;
