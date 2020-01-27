import React from 'react';
import '../styles/App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Week from './Week';

const useStyles = makeStyles({
  base: {
    padding: '2%',
  },
  title: {
    color: '#448FFF',
    paddingBottom: '30px',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      <Typography variant="h3" className={classes.title}>
        WhenW3Meet
      </Typography>
      <Week />
    </div>
  );
};

export default App;
