import React from 'react';
import Navbar from './components/Navbar';
import Email from './components/Email';
import uniqid from 'uniqid';



class App extends React.Component {

  state = {
    users: [
      {
        id: 1,
        name: "Joe",
        email: "joe@mail.com"
      },
      {
        id: 2,
        name: "Sal",
        email: "sal@mail.com"
      },
      {
        id: 3,
        name: "Murr",
        email: "murr@mail.com"
      }
    ],
    name: "",
    email: ""
  }

  //method to run when name input field changes
  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  //method to run when email input field changes
  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  //method to run when form submitted
  saveEmail = (e) => {
    e.preventDefault();
    let email = {
      id: uniqid(),
      name: this.state.name,
      email: this.state.email
    }

    this.setState({
      users: [...this.state.users, email]
    })
  }

  //method to delete component
  delete = (id) => {
    let newUser = this.state.users.filter(user => (
      user.id !== id
    ))

    this.setState({
      users: newUser
    })
  }
  
  
  render(){
    return (
      <div className="App">
      <Navbar />

      <form className="container my-3" onSubmit={this.saveEmail}>
        <input type="text" 
        className="form-control mb-3" 
        placeholder="Enter Name" 
        onChange={this.changeName}/>

        <input type="email" 
        className="form-control mb-3" 
        placeholder="Enter Email" 
        onChange={this.changeEmail}/>

        <input type="submit" 
        className="btn btn-success" 
        value="Create" />
      </form>

        {this.state.users.map(user => (
          <Email key={user.id} 
          name={user.name} 
          email={user.email}
          deleteComponent={this.delete}
          id={user.id}
          />
        ))}
      </div>
    );
  }
  }
  

export default App;
