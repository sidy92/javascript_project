import logo from './logo.svg';
import './App.css';
import React from 'react';

class App1 extends React.Component {
   constructor(props){
    super(props);
    console.log(props);
   }

  render(){
  return (
    <div className="App">
      <header className="App-header">
<p>This is my second component </p>
<p>Im Child component</p>
<br/>These parameters passed from parent component<br/>
     <br/> name : {this.props.name}
        {/* use this if you are using spread operator*/} 
    
      {/* user  this if your passing this.state as params  <br/> age: {this.props.params.age}--*/} 
      </header>
    </div>
  );
}

}
export default App1;
