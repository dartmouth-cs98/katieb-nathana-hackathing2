import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import WeekDay from './WeekDay';

const useStyles = makeStyles({
  week: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Week = () => {
  const classes = useStyles();

  return (
    <div className={classes.week}>
      <WeekDay />
      <WeekDay />
      <WeekDay />
      <WeekDay />
      <WeekDay />
      <WeekDay />
      <WeekDay />
    </div>
  );
};

export default Week;
