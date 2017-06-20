import React from 'react';
import AppBar from 'material-ui/AppBar';
import { red600 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import PlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';

const style = {
  backgroundColor: red600
}

const AppBarExampleIcon = () => (
  <AppBar
    title="Todo List"
    style={style}
    iconElementLeft={<IconButton><PlaylistAddCheck /></IconButton>}
  />
);

export default AppBarExampleIcon;