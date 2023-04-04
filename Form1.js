import logo from './logo.svg';
import './App.css';
import React from 'react';
import App1 from './App1';
import App2 from './App2';
import axios from 'axios';

class Form1  extends React.Component{
  

state ={name:"",email:"",age:0,users:[]}
constructor(props){
    super(props);
    this.changehandler1 = this.changehandler1.bind(this);
    this.submit =this.submit.bind(this);
    this.getusers = this.getusers.bind(this);
}
 getusers(e){

  axios.get(`http://localhost:3005/getallusers`)
    .then(res => {
        console.log(res.data);
   
    this.setState({users: res.data});
     console.log('state'+this.state.users);
    console.log(res);
    })

}

changehandler1(e){

    if (e.target.name =="name1"){
        console.log(e.target.value);
     this.setState({name :e.target.value});
  
    }
    if (e.target.name =="age"){
        this.setState({age :e.target.value});
         console.log(this.state);

    }
    if (e.target.name =="email"){
        console.log(e.target.value);
        this.setState({email :e.target.value});


    }
}
async submit(e){
    e.preventDefault();
    console.log(this.state);
    const userData = {
        name: this.state.name,
       age:this.state.age
      };

axios.post("http://127.0.0.1:3005/addusers", userData).then((response) => {
console.log(userData + 'Sent to server');   
console.log(response.status, response.data);
  });

}



render(){

return(<div>
    {this.state.users.map((a, index) => (
        <p>Hello,index {index} {a.name} from {a.age}!<button onClick={()=>this.delete1(index)}>Delete</button></p>
        ))}
        
<form onSubmit={this.submit}>
Name     :<input type="text" name="name1" value={this.state.name} onChange={this.changehandler1}/><br/>
Age       :<input type="number" name="age" value={this.state.age} onChange={this.changehandler1}/><br/>
Email     :<input type="email" name="email" value={this.state.email} onChange={this.changehandler1}/><br/>

<input type="submit" value="Submit" />      
<button onClick = {this.getusers}>Show users </button>



</form>


</div>



);
}
}

export default Form1;
