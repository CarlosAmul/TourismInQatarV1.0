/* eslint no-else-return:0 */

// Chart
import Chart from "react-apexcharts";

export default function TimeChart({ id, data, start }) {
    const times = [
        '12am', '1am', '2am', '3am', '4am', '5am',
        '6am', '7am', '8am', '9am', '10am', '11am',
        '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
        '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
    ]

    const end = times.indexOf(start)+(data.length)

    return (<Chart
        options={{
            chart: {
                id
            },
            annotations: {
                yaxis: [
                    {
                        y: 20,
                        borderColor: '#91c7e3',
                        label: {
                            borderColor: '#91c7e3',
                            style: {
                                color: '#fff',
                                background: '#91c7e3'
                            },
                            text: 'Low Activity (20% - 40%)'
                        }
                    },

                    {
                        y: 40,
                        borderColor: '#00E396',
                        label: {
                            borderColor: '#00E396',
                            style: {
                                color: '#fff',
                                background: '#00E396'
                            },
                            text: 'Normal Activity (40% - 60%)'
                        }
                    },
                    {
                        y: 60,
                        borderColor: '#ffa300',
                        label: {
                            borderColor: '#ffa300',
                            style: {
                                color: '#fff',
                                background: '#ffa300'
                            },
                            text: 'Moderate Activity (60% - 80%)'
                        }
                    },
                    {
                        y: 80,
                        borderColor: '#f0322b',
                        label: {
                            borderColor: '#f0322b',
                            style: {
                                color: '#fff',
                                background: '#f0322b'
                            },
                            text: 'High Activity (80% - 100%)'
                        }
                    },
                ]
            },
            xaxis: {
                categories: times.slice(times.indexOf(start), end)
            },
            yaxis: {
                seriesName: "Expected Capacity (in %)",
                tickAmount: 9,
                min: 10,
                max: 100,
                labels: {
                    formatter: (value) => {
                        // if (value >= 10 && value < 30) {
                        //     return 'Low Activity (10-30)'
                        // }
                        // else if (value >= 30 && value < 50) {
                        //     return 'Normal Activity (30-50)'
                        // }
                        // else if (value >= 50 && value < 80) {
                        //     return 'Moderate Full (50-80)'
                        // }
                        // else if (value >= 80 && value < 100) {
                        //     return 'High Activity (80-100)'
                        // }
                        return `${value}%`
                    },
                },
            },
        }}
        series={
            [
                {
                    name: "Capacity",
                    data
                }
            ]}
        type="line"
        width="100%"
    />)

}