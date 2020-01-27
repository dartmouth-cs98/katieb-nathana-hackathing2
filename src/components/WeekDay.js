import React from 'react';
import { Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  base: {
    width: '13%',
  },
  weekDay: {
    background: '#F0F0F0',
    height: '450px',
    borderRadius: '8px',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  hour: {
  },
});

const WeekDay = ({ day }) => {
  const classes = useStyles();

  const formattedDay = new Date(day);

  return (
    <div className={classes.base}>
      <Typography>
        {formattedDay.toDateString().slice(0, -5)}
      </Typography>
      <div className={classes.weekDay}>
        <Paper />
        <Typography variant="caption" className={classes.hour}>
          8am
        </Typography>
        <Divider light />
        <Typography variant="caption">
          9am
        </Typography>
        <Divider light />
        <Typography variant="caption">
          10am
        </Typography>
        <Divider light />
        <Typography variant="caption">
          11am
        </Typography>
        <Divider light />
        <Typography variant="caption">
          12pm
        </Typography>
        <Divider light />
        <Typography variant="caption">
          1pm
        </Typography>
        <Divider light />
        <Typography variant="caption">
          2pm
        </Typography>
        <Divider light />
        <Typography variant="caption">
          3pm
        </Typography>
        <Divider light />
        <Typography variant="caption">
          4pm
        </Typography>
      </div>
    </div>
  );
};

WeekDay.propTypes = {
  day: PropTypes.number.isRequired,
};

export default WeekDay;
