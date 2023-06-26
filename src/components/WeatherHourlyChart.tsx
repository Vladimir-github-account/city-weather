import React, { FC }                                   from 'react';
import Paper                                           from '@mui/material/Paper';
import { ArgumentAxis, ValueAxis, LineSeries, Chart, } from '@devexpress/dx-react-chart-material-ui';
import { ValueScale }                                  from '@devexpress/dx-react-chart';
import { IWeatherResponse }                            from '../types/weather';
import { Box }                                         from '@mui/material';
import { weatherChartPaperStyles }                     from './styles';
import WeatherHeading                                  from './UI/WeatherHeading';

interface WeatherHourlyChartProps {
	weatherResponse: IWeatherResponse,
}

const WeatherHourlyChart: FC<WeatherHourlyChartProps> = ({ weatherResponse }) => {
	const { name, hourly } = weatherResponse;
	return (
		<>
			<WeatherHeading heading={'Weather hourly'}/>
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

export default WeatherHourlyChart;
