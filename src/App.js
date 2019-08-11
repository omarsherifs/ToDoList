import React,{Component} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Todos from './componants/Todos'
import './App.css';
import Header from './componants/Layout/Header'
import AddTodo from'./componants/AddTodo';
import About from './componants/pages/About';
import axios from 'axios';


class App extends Component{

  state = {
    Todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({Todos:res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>this.setState({Todos:
        [...this.state.Todos.filter(todo => todo.id !== id )]}));
    }
  
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    })
      .then(res=> this.setState({Todos:
        [...this.state.Todos, res.data]}));
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
