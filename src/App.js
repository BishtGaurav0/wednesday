
import React from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FunactionComp from './FunactionComp';

class App extends React.Component {
   constructor(){
     super();
     this.state={
          showComp:true
     }
   }
   toggle=()=>{
     this.setState({
      showComp:!this.state.showComp
     })
   }

  render(){
  return (
    <div className="App">
     <ClassComp/>
     <FunactionComp/>
     {this.state.showComp && <FunactionComp/>}
     {this.state.showComp ? <FunactionComp/> : <span>Hiiii.......</span>}
     <button onClick={this.toggle}>Toggle button</button>
    </div>
  );
  }
}

export default App;
