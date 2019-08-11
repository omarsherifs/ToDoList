import React,{Component} from 'react';
import Todos from './componants/Todos'
import './App.css';
import Header from './componants/Layout/Header'
import AddTodo from'./componants/AddTodo';

class App extends Component{

  state = {
    Todos: [
      {
        id:1,
        title:"Finish Home Screen",
        completed: false,
      },
      {
        id:2,
        title:"Upload you new vlog",
        completed: true,
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


  render(){
      return(
        <div className="App">
          <Header></Header>
          <div className="container">
            <AddTodo></AddTodo>
            <Todos Todos={this.state.Todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
          </div>
      </div>
      );
  }
}

export default App;
