import React, {FC} from 'react';
import Paper from '@mui/material/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Chart,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';
import {IWeatherResponse} from "../types/weather";

interface IDataItem {
  hour: string,
  temperature: number
}

const chartData: IDataItem[] = [
  { hour: '0', temperature: 50 },
  { hour: '3', temperature: 100 },
  { hour: '6', temperature: 30 },
  { hour: '9', temperature: 107 },
  { hour: '12', temperature: 95 },
  { hour: '15', temperature: 150 },
];

interface WeatherChartProps {
    weatherResponse: IWeatherResponse,
}

const WeatherChart: FC<WeatherChartProps> = ({weatherResponse}) => {
  const {name, main} = weatherResponse;
  return (
      <Paper>
        <Chart
            data={chartData}
        >
          <ValueScale name="temperature" />

          <ArgumentAxis />
          <ValueAxis scaleName="temperature" showGrid={false} showLine={true} showTicks={true} />

          <SplineSeries
              name={name}
              valueField="temperature"
              argumentField="hour"
              scaleName="temperature"
          />
        </Chart>
      </Paper>
  );
};

export default WeatherChart;
