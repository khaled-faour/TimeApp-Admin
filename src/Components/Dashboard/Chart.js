import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Chart as GoogleChart } from "react-google-charts";

// Generate Sales Data
const createData = (time, amount) => {
    return [time, amount];
}

const data = [
    createData('X', 'amount'),
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', 2400),
];

const Chart = () => {
    const theme = useTheme();

    return (
        <React.Fragment>
            <h3>Today</h3>
            <GoogleChart
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    hAxis: {
                        title: 'Time',
                    },
                    vAxis: {
                        title: 'Amount',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </React.Fragment>
    );
}

export default Chart;