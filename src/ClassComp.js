import React from 'react'

class ClassComp extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Gaurav",
            age:23
        }
    }
    render(){
        return(
            <div>
                <h1>Class Component</h1>
                <h2>student name is {this.state.name}</h2>
                <h2>student age is {this.state.age}</h2>
            </div>
        );
    }
}
export default ClassComp