import React, { FC }                                    from 'react';
import Paper                                            from '@mui/material/Paper';
import { ArgumentAxis, ValueAxis, SplineSeries, Chart } from '@devexpress/dx-react-chart-material-ui';
import { ValueScale }                                   from '@devexpress/dx-react-chart';
import { IWeatherResponse }                             from '../types/weather';
import { Box }                                          from '@mui/material';
import { weatherChartPaperStyles }                      from './styles';
import WeatherHeading                                   from './UI/WeatherHeading';

interface WeatherDailyChartProps {
	weatherResponse: IWeatherResponse,
}

const WeatherDailyChart: FC<WeatherDailyChartProps> = ({ weatherResponse }) => {
	const { name, daily } = weatherResponse;
	return (
		<>
			<WeatherHeading heading={'Weather daily'}/>
			<Box className="overflow-auto min-h-300px w-full flex items-center scrollbar">
				<Paper sx={weatherChartPaperStyles}>
					<Chart data={daily} height={300}>
						<ValueScale name="day_temp"/>
						<ArgumentAxis/>
						<ValueAxis scaleName="day_temp" showGrid={false} showLine={true} showTicks={true}/>
						<SplineSeries
							name={name}
							valueField="day_temp"
							argumentField="dt"
							scaleName="day_temp"
						/>
					</Chart>
				</Paper>
			</Box>
		</>
	);
};

export default WeatherDailyChart;
