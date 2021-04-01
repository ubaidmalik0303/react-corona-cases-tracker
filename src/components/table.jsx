import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { GlobalContext } from '../ContextApi/GlobalContext';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function CountriesTable() {
    const classes = useStyles();

    const { allCountries, country } = useContext(GlobalContext);

    return (
        <>{country === 'all' ? <div style={{
            height: 400,
            overflow: 'scroll',
            border: '1px solid grey',
            margin: 20
        }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="right">New Cases</TableCell>
                            <TableCell align="right">Total Cases</TableCell>
                            <TableCell align="right">New Deaths</TableCell>
                            <TableCell align="right">Total Deaths</TableCell>
                            <TableCell align="right">Total Recovered</TableCell>
                            <TableCell align="right">Active Cases</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allCountries.map((val, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {val.country}
                                </TableCell>
                                <TableCell align="right">{val.cases.new === null ? 0 : val.cases.new}</TableCell>
                                <TableCell align="right">{val.cases.total === null ? 0 : val.cases.total}</TableCell>
                                <TableCell align="right">{val.deaths.new === null ? 0 : val.deaths.new}</TableCell>
                                <TableCell align="right">{val.deaths.total === null ? 0 : val.deaths.total}</TableCell>
                                <TableCell align="right">{val.cases.recovered === null ? 0 : val.cases.recovered}</TableCell>
                                <TableCell align="right">{val.cases.active === null ? 0 : val.cases.active}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div> : null}</>
    );
}
