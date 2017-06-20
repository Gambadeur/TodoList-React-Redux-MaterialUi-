import React, { Component } from 'react';
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import Title from './Title';


export default class TodoComponent extends Component {

  render() {
    return (
      <div className="container">
        <Title />
        <div className="wrapperTodo"> 
          <div className="wrapperInputFilter">
            <TodoInput className="todoInput" onAddTodo={this.props.onAddTodo} />
            <TodoFilter className="todoFilter" status={this.props.filter} onSelectFilter={this.props.onSelectFilter} />
          </div>
          <div className="wrapperTodoList">
            <TodoList className="todoList" todos={this.props.todos} filter={this.props.filter} selectItem={this.props.onTodoClick} />
          </div>
        </div>
       
      </div>
    );
  }
}
