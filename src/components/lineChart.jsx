import { SignalCellularNull } from '@material-ui/icons';
import React, { useContext, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { GlobalContext } from '../ContextApi/GlobalContext';


const LineChart = () => {

    const { data, history } = useContext(GlobalContext);
    var [cases, setCases] = useState([]);
    var [dates, setDates] = useState([]);
    var [deaths, setDeaths] = useState([])
    var [recovered, setRecovered] = useState([])

    const getHistory = () => {
        var date = 0;
        var filterCases = [];
        var filterDeaths = [];
        var filterRecovered = [];
        var filterDates = [];
        history.map((val, i) => {
            if (date !== history[i].day) {
                filterCases.push(val.cases.total)
                filterDates.push(val.day)
                filterDeaths.push(val.deaths.total)
                filterRecovered.push(val.cases.recovered)
                date = val.day;
            }
        })
        filterCases.reverse()
        filterDeaths.reverse()
        filterRecovered.reverse()
        filterDates.reverse()
        setCases(filterCases)
        setDeaths(filterDeaths)
        setRecovered(filterRecovered)
        setDates(filterDates)
    }

    useEffect(() => {
        return getHistory();

    }, [history])

    return (
        <div>
            <h2>History Chart</h2>
            <Line data={!cases[0] ? {} : {
                labels: dates,
                datasets: [
                    {
                        label: 'Total Cases',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: cases
                    },
                    {
                        label: 'Total Deaths',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: '#bf4551',
                        borderColor: '#bf4551',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#bf4551',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: '#bf4551',
                        pointHoverBorderColor: '#bf4551',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: deaths
                    },
                    {
                        label: 'Total Recovered',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'green',
                        borderColor: 'green',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'green',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 5,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'green',
                        pointHoverBorderColor: 'green',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: recovered
                    },
                ]
            }}
            />
        </div>
    );

}


export default LineChart;
