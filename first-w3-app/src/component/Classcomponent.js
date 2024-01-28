import React from "react";
import { Component } from "react";
// import { ReactDOM } from "react";
import './component.css'

class Person extends Component{
    constructor(props){
        super();
        this.detail = {age:props.age};
        this.state={
            name:"mukesh",
            sex:"male",
            age:52,
            weight:"67 kg"
        };

    }

    // setstate
    changeName = () =>{
        this.setState({name:"ramesh"});
    }

    displayAge() {
        return <h1>Her age was small</h1>;
    }
    render(){
        // console.log(this.props.age);
        return (
        <>
        {this.displayAge()}
        <h1>Your age is {this.detail.age}</h1>
        <p>{this.state.name} is a {this.state.age} years old and He is a {this.state.sex} and he got a {this.state.weight} weight.</p>
        <button onClick={this.changeName}>Change name</button>
        </>
        )
    }

}

export default Person;
