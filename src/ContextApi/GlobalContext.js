import React, { useState, useEffect, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [country, setCountry] = useState('all');
    const [data, setData] = useState(null);
    const [allCountries, setAllCountries] = useState([])
    const [history, setHistory] = useState([])

    useEffect(() => {
        const getData = async () => {
            await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "eff085456fmsh54f64ff826c8252p1f3473jsn55184427a145",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            })
                .then(response => response.json())
                .then((data) => {
                    setData(data.response[0])
                })
                .catch(err => {
                    console.error(err);
                });
        }

        return getData();
    }, [country])

    useEffect(() => {
        setHistory([])
        const getData = async () => {
            await fetch(`https://covid-193.p.rapidapi.com/history?country=${country}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "eff085456fmsh54f64ff826c8252p1f3473jsn55184427a145",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            })
                .then(response => response.json())
                .then((data) => {
                    setHistory(data.response)
                })
                .catch(err => {
                    console.error(err);
                });
        }

        return getData();
    }, [data])

    useEffect(() => {
        const getData = async () => {
            await fetch(`https://covid-193.p.rapidapi.com/statistics`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "eff085456fmsh54f64ff826c8252p1f3473jsn55184427a145",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com"
                }
            })
                .then(response => response.json())
                .then((data) => {
                    setAllCountries(data.response)
                })
                .catch(err => {
                    console.error(err);
                });
        }

        return getData();
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                country,
                setCountry,
                data,
                setData,
                allCountries,
                setAllCountries,
                history,
                setHistory,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}