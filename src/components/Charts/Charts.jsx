import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2'

import './Charts.modules.css'

const Charts = ({ data: { confirmed, deaths, recovered }, country }) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchDaily = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchDaily()


    }, [])

    const lineChart = (
        dailyData.length ?
            <Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Cases',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }} />
            : null
    )

    console.log(confirmed, recovered, deaths)

    const barChart = (
        confirmed ?
            (
                <Bar
                    data={{
                        labels: ['Cases', 'Recoveries', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current cases in ${country}` }
                    }} />
            ) :
            null
    )

    return (
        <div className='chart'>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;