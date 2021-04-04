import { SignalCellularNullOutlined } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { GlobalContext } from '../ContextApi/GlobalContext';


const BarChart = () => {

    const { data, history } = useContext(GlobalContext);

    return (
        <div>
            <h2 style={{
                marginTop: 40,
                marginBottom: 20,
            }}>Overall Cases Statistics</h2><Bar
                data={!data ? {} : {
                    labels: ["Cases"],
                    datasets: [
                        {
                            label: "Total Cases",
                            backgroundColor: '#79a8f2',
                            borderColor: '#2f79ed',
                            borderWidth: 1,
                            hoverBackgroundColor: '#2f79ed',
                            hoverBorderColor: '#79a8f2',
                            data: [data.cases.total]
                        },
                        {
                            label: "Total Deaths",
                            backgroundColor: '#bf4551',
                            borderColor: '#bf0f21',
                            borderWidth: 1,
                            hoverBackgroundColor: '#bf0f21',
                            hoverBorderColor: '#bf4551',
                            data: [data.deaths.total]
                        },
                        {
                            label: "Totals Recovered",
                            backgroundColor: '#35b557',
                            borderColor: '#04c437',
                            borderWidth: 1,
                            hoverBackgroundColor: '#04c437',
                            hoverBorderColor: '#35b557',
                            data: [data.cases.recovered]
                        },
                        {
                            label: "Active Cases",
                            backgroundColor: '#c7c712',
                            borderColor: '#bfbf4e',
                            borderWidth: 1,
                            hoverBackgroundColor: '#bfbf4e',
                            hoverBorderColor: '#c7c712',
                            data: [data.cases.active]
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false
                }}
                height={300}
            />
        </div>
    );
}


export default BarChart;