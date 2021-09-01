// Login page
// import React from 'react';
//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state =  {
//       username: '',
//       password: ''
//     }
//     this.handleUsernameChange = this.handleUsernameChange.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     //this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleUsernameChange(event) {
//     this.setState({username: event.target.value});
//   }
//   handlePasswordChange(event) {
//     this.setState({password: event.target.value})
//   }

//    Signup = () => { 
//     fetch("/post", {
//       method: 'POST',
//       body: JSON.stringify(
//       {username : "Daniel12", 
//       password: "codesmith"}),
//       headers: {
//           'Content-Type': 'application/json',
//       }
//   })
//   .then(res => res.json())
//   .then(result => {result}
//   )};


  
//   render() {
//     return (
     
//       <div>
//         <form>
//           <input id="username" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange}></input>
//           <input id="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
          
//         </form>
//         <button>Login</button>
//         <button onClick={() => this.Signup(document.getElementById(username)document.getElementById(username),>Sign up</button>
//       </div>
//     )
//   }
// }



// export default App;

