import React, { Component, PropTypes } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';


injectTapEventPlugin();

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      inputValue: "",
    }
  }

  onInputChange(event){
    this.setState({
      inputValue: event.target.value,
    });
  }

  onClickButton(){
    this.setState({
      inputValue: "",
    });
    this.props.onAddTodo(this.state.inputValue);
  }

  render() {
    return (
      <div>
        <TextField floatingLabelText="Ajouter une tâche" type="text" value={this.state.inputValue} onChange={this.onInputChange}/>
        <FloatingActionButton className="buttonAdd" onTouchTap={this.onClickButton}><ContentAdd /></FloatingActionButton>
      </div>
    );
  }
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
}


export default TodoInput;
