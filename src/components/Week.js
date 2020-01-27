import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import WeekDay from './WeekDay';

const useStyles = makeStyles({
  week: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    paddingBottom: '20px',
  },
});

const Week = () => {
  const classes = useStyles();
  const today = new Date();

  return (
    <div>
      <Typography className={classes.info}>
        You are currently viewing...
      </Typography>
      <div className={classes.week}>
        <WeekDay day={today.getTime()} />
        <WeekDay day={today.setDate(today.getDate() + 1)} />
        <WeekDay day={today.setDate(today.getDate() + 1)} />
        <WeekDay day={today.setDate(today.getDate() + 1)} />
        <WeekDay day={today.setDate(today.getDate() + 1)} />
        <WeekDay day={today.setDate(today.getDate() + 1)} />
        <WeekDay day={today.setDate(today.getDate() + 1)} />
      </div>
    </div>
  );
};

export default Week;
