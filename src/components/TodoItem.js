import React, {PropTypes} from 'react';
import {ListItem} from 'material-ui/List';

const TodoItem = (props) => {

    let itemClass = "";
    if(props.complete) itemClass = "complete";

    return (<ListItem className={itemClass} onClick={props.onClick}>{props.label}</ListItem>);
}

TodoItem.propTypes = {
  label: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  onClick: PropTypes.func,
}

export default TodoItem;
