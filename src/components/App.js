import React from 'react';
import '../styles/App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Week from './Week';

const useStyles = makeStyles({
  base: {
    padding: '2%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    color: '#448FFF',
    paddingBottom: '20px',
  },
  profile: {
    color: '#000000',
    paddingBottom: '30px',
    alignSelf: 'center',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      <div className={classes.header}>
        <Typography variant="h3" className={classes.title}>
          WhenW3Meet
        </Typography>
        <Typography variant="subtitle1" className={classes.profile}>
          Nathan Albrinck
        </Typography>
      </div>
      <Week />
    </div>
  );
};

export default App;
