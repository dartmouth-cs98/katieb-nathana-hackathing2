import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  base: {
    width: '13%',
  },
  weekDay: {
    background: '#F0F0F0',
    height: '450px',
    borderRadius: '8px',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
  },
});

const WeekDay = () => {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      Test
      <div className={classes.weekDay}>
        <Paper />
      </div>
    </div>
  );
};

export default WeekDay;
