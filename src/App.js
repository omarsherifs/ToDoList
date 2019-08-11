import React,{Component} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Todos from './componants/Todos'
import './App.css';
import Header from './componants/Layout/Header'
import AddTodo from'./componants/AddTodo';
import uuid from 'uuid';
import About from './componants/pages/About';

class App extends Component{

  state = {
    Todos: [
      {
        id:uuid.v4(),
        title:"Finish Home Screen",
        completed: false,
      },
      {
        id:uuid.v4(),
        title:"Upload you new vlog",
        completed: false,
      },
    ]
  }

  markComplete = (id) => {
    this.setState({Todos:this.state.Todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  deleteTodo = (id) => {
      
    console.log(id);
    this.setState({Todos:[...this.state.Todos.filter(todo => todo.id !== id )]});
  
    }
  
  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({Todos:[...this.state.Todos, newTodo]});
  }  


  render(){
      return(
        <Router>
          <div className="App">
            <Header></Header>
            <Route exact path="/" render={props => (
              <React.Fragment>
            <div className="container">
              <AddTodo addTodo={this.addTodo}></AddTodo>
              <Todos Todos={this.state.Todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
            </div>
              </React.Fragment>
            )}/>
        
        <Route path="/about" component={About}/>


        </div>
      </Router>
      );
  }
}

export default App;
