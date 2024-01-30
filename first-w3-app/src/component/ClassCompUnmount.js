import React from "react";
import { Component } from "react";

class Container extends Component{
    constructor(){
        super();
        this.state = {show: true};
    }

    triggerEvent = () =>{
        this.setState= {show: false};
    }

    render(){
        let myHeader;

        if(this.state.show){
            myHeader=<Child></Child>
        }

        return(
            <>
                {myHeader}
                <button onClick={this.triggerEvent}>Delete event</button>
            </>
        )
    }
}

class Child extends Component{
    componentWillUnmount(){
        alert("nikalja Bhosdike");
    }

    render(){
        return(
            <h1>hello green!</h1>
        )
    }
}

export default Container;