import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { GlobalContext } from '../ContextApi/GlobalContext';
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '90%',
        margin: '30px auto'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CasesDetails() {

    const classes = useStyles();
    const { data, country } = useContext(GlobalContext);

    return (
        <div className={classes.root}>

            <Grid container justify="center">
                <h1 style={{
                    fontStyle: 'italic',
                    margin: '20px auto',
                    borderBottom: '3px solid red',
                    display: 'inline-block'
                }}>{country === 'all' ? "Worldwide" : country}</h1>
            </Grid>

            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper style={{ backgroundColor: '#56e5f0' }} elevation={5} className={classes.paper}>
                        <h2>NEW CASES</h2>
                        {!data ? <h1>00</h1> : <h1>+<CountUp end={parseInt(data.cases.new)} duration={2} /></h1>}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper style={{ backgroundColor: '#1eb4eb' }} elevation={10} className={classes.paper}>
                        <h2>TOTAL CASES</h2>
                        {!data ? <h1>00</h1> : <h1><CountUp end={parseInt(data.cases.total)} duration={2} /></h1>}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper style={{ backgroundColor: '#d64762' }} elevation={10} className={classes.paper}>
                        <h2>NEW DEATHS</h2>
                        {!data ? <h1>00</h1> : <h1>+<CountUp end={parseInt(data.deaths.new)} duration={2} /></h1>}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper style={{ backgroundColor: '#cf2d2d' }} elevation={10} className={classes.paper}>
                        <h2>TOTAL DEATHS</h2>
                        {!data ? <h1>00</h1> : <h1><CountUp end={parseInt(data.deaths.total)} duration={2} /></h1>}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper style={{ backgroundColor: '#d69a2b' }} elevation={5} className={classes.paper}>
                        <h2>CRITICAL</h2>
                        {!data ? <h1>00</h1> : <h1><CountUp end={parseInt(data.cases.critical)} duration={2} /></h1>}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper style={{ backgroundColor: '#5fd94a' }} elevation={10} className={classes.paper}>
                        <h2>RECOVERED</h2>
                        {!data ? <h1>00</h1> : <h1><CountUp end={parseInt(data.cases.recovered)} duration={2} /></h1>}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper style={{ backgroundColor: '#f0f03a' }} elevation={10} className={classes.paper}>
                        <h2>ACTIVE CASES</h2>
                        {!data ? <h1>00</h1> : <h1><CountUp end={parseInt(data.cases.active)} duration={2} /></h1>}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
