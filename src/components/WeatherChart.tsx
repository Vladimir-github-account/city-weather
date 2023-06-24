import React, { FC }               from 'react';
import Paper                       from '@mui/material/Paper';
import {
	ArgumentAxis,
	ValueAxis,
	LineSeries,
	Chart,
}                                  from '@devexpress/dx-react-chart-material-ui';
import { ValueScale }              from '@devexpress/dx-react-chart';
import { IWeatherResponse }        from '../types/weather';
import { Box, Typography }         from '@mui/material';
import { weatherChartPaperStyles } from './styles';

interface WeatherChartProps {
	weatherResponse: IWeatherResponse,
}

const WeatherChart: FC<WeatherChartProps> = ({ weatherResponse }) => {
	const { name, hourly } = weatherResponse;
	return (
		<>
			<Typography mb={{ xs: '18px', lg: '14px' }} component="h2" variant="h6" color="white">Weather hourly</Typography>
			<Box className="overflow-auto min-h-300px w-full flex items-center scrollbar">
				<Paper sx={weatherChartPaperStyles}>
					<Chart data={hourly} height={300}>
						<ValueScale name="temp"/>
						<ArgumentAxis/>
						<ValueAxis scaleName="temp" showGrid={false} showLine={true} showTicks={true}/>
						<LineSeries
							name={name}
							valueField="temp"
							argumentField="dt"
							scaleName="temp"
						/>
					</Chart>
				</Paper>
			</Box>
		</>
	);
};

export default WeatherChart;
