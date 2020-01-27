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
  const weekStart = new Date(today);
  const weekEnd = new Date(today.getDate() + 6);

  return (
    <div>
      <Typography className={classes.info} variant="h6">
        {'You are currently viewing '}
        {weekStart.toDateString().slice(0, -5)}
        {' - '}
        {weekEnd.toDateString().slice(0, -5)}
        {' in Eastern Standard Time'}
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
