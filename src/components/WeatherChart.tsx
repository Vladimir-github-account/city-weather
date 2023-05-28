import React, { FC }        from 'react';
import Paper                from '@mui/material/Paper';
import {
	ArgumentAxis,
	ValueAxis,
	SplineSeries,
	Chart,
}                           from '@devexpress/dx-react-chart-material-ui';
import { ValueScale }       from '@devexpress/dx-react-chart';
import { IWeatherResponse } from '../types/weather';

interface WeatherChartProps {
	weatherResponse: IWeatherResponse,
}

const WeatherChart: FC<WeatherChartProps> = ({ weatherResponse }) => {
	const { name, hourly } = weatherResponse;
	return (
		<>
			{hourly && <Paper sx={{ width: 700 }}>
				<Chart data={hourly}>
					<ValueScale name="temp"/>
					<ArgumentAxis/>
					<ValueAxis scaleName="temp" showGrid={true} showLine={true} showTicks={true}/>
					<SplineSeries
						name={name}
						valueField="temp"
						argumentField="dt"
						scaleName="temp"
					/>
				</Chart>
			</Paper>}
		</>
	);
};

export default WeatherChart;
