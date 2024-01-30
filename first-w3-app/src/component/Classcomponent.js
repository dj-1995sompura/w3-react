import React from "react";
import { Component } from "react";
// import { ReactDOM } from "react";
import './component.css'

class Person extends Component{
    constructor(props){
        super();
        this.state = {favColor:'red'};
    }

    // updating
    shouldComponentUpdate(){
        return true;
    }

    // mounting
    // before render method
    static getDerivedStateFromProps(props, state){
        return {favColor:props.color}
    } 

    // after render method
    componentDidMount(){
        setTimeout(()=>{
           this.setState({favColor:"purple"}); 
        });
    }


    // get snapshot method
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('div1').innerHTML = "Before the update, the favorite was "+ prevState.favColor;
    }

    componentDidUpdate(){
        document.getElementById('div2').innerHTML = "After the update, the favorite is "+ this.state.favColor;
    }

    render(){
        return (
        <>
            <h1>My favorite colour is {this.state.favColor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </>
        )
    }

}

export default Person;
