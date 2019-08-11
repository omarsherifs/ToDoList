import React,{Component} from 'react';
import Todos from './componants/Todos'
import './App.css';


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
        completed: false,
      },
    ]
  }

  render(){
      return(
        <div className="App">
        <Todos Todos={this.state.Todos} />
      </div>
      );
  }
}

export default App;
