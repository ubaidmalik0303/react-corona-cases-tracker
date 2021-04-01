import { SignalCellularNull } from '@material-ui/icons';
import React, { useContext, useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { GlobalContext } from '../ContextApi/GlobalContext';


const LineChart = () => {

    const { data, history } = useContext(GlobalContext);
    const [cases, setCases] = useState([]);
    const [dates, setDates] = useState([]);
    const [deaths, setDeaths] = useState([])

    // const getistory = () => {
    //     if (history) {
    //         history.map((val) => {
    //             cases.push(val.cases.total)
    //             setCases(cases)
    //         })
    //     }
    //     console.log(cases)
    // }

    useEffect(() => {
        if (history) {
            history.map((val) => {
                cases.push(val.cases.total)
                dates.push(val.day)
                deaths.push(val.deaths.total)
            })
            dates.reverse()
            cases.reverse()
            deaths.reverse()
        }
        setDates(dates)
    }, [history])

    return (
        <div>
            {console.log("Daily Cases => ", dates)}
            <h2>Line Example</h2>
            {dates[0] ? <Line data={{
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
                        data: deaths,
                    },
                ]
            }}
                height={400}
            /> : null}
        </div>
    );

}


export default LineChart;
