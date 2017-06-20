import { connect } from 'react-redux'
import Todos from './../components/TodosComponent';
import React, { Component } from 'react';

// HOC
function fetchTodos(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      fetch('api/todos.json')
      .then((response) =>  {
          return response.json();
      }).then((results) => {
          this.props.fetchComplete(results);
      }).catch((err) =>  {
          this.props.fetchError(err);
      });
    }
    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {

    fetchComplete(results){
      dispatch({ type: 'INIT_TODOS', results})
    },
    onTodoClick: (index) => {
      dispatch({ type: 'TOGGLE_TODO', index});
    },
    onAddTodo: (label) => {
      dispatch({ type: 'ADD_TODO', label});
    },
    onSelectFilter: (filter) => {
      dispatch({ type: 'SET_VISIBILITY_FILTER', filter })
    }
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

const TodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(fetchTodos(Todos));

export default TodosContainer