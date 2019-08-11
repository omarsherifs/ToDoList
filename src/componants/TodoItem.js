import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            color:'#2f3640',
            background:'#ecf0f1',
            padding:'15px',
            margin:'2%',
            fontweight:"600",
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  
    
    render() {
        const {id , title} = this.props.todo;
        
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

//Prop Types
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
    
}

const btnStyle= {
    background: '#ff0000',
    color:'white',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}


export default TodoItem;
