import React, { useState, useEffect, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../ContextApi/GlobalContext';
import CovidLogo from '../covid-19.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'sticky',
        top: 0,
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Header() {

    const classes = useStyles();
    const [countriesName, setCountriesName] = useState([]);
    const { setCountry } = useContext(GlobalContext);

    useEffect(() => {

        const getData = async () => {
            await fetch("https://covid-193.p.rapidapi.com/countries", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "eff085456fmsh54f64ff826c8252p1f3473jsn55184427a145",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            })
                .then(response => response.json())
                .then((data) => {
                    setCountriesName(data.response)
                })
                .catch(err => {
                    console.error(err);
                });
        }

        return getData();

    }, [])


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img src={CovidLogo} style={{
                        height: 40,
                        marginRight: 10,
                    }} alt="" /><Typography className={classes.title} variant="h6" noWrap>Covid-19 Cases Tracker</Typography>
                </Toolbar>
            </AppBar>
            <select className={classes.selectCountry} placeholder="Select Country" onChange={(e) => setCountry(e.target.value)} style={{
                width: '100%',
                height: 50,
                border: 'none',
                borderBottom: '3px solid red',
                fontStyle: 'italic',
                fontSize: 20,
                outline: 'none',
                textAlign: 'center',
            }}>
                <option value="all">Worldwide</option>
                {countriesName.map((val, i) => {
                    return <option key={i} value={val}>{val}</option>
                })}
            </select>
        </div>
    );
}