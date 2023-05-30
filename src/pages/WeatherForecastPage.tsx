import { Box }          from '@mui/material';
import React, { FC }    from 'react';
import CurrentWeather   from '../components/WeatherForecastPage/CurrentWeather';
import InformationBlock from '../components/WeatherForecastPage/InformationBlock';

const WeatherForecastPage: FC = () => {
	return (
		<Box sx={{
			display: 'flex',
			width: '100%',
			height: '100vh',
			justifyContent: 'space-between',
			backgroundImage: 'url(./1.jpg)',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			color: 'rgb(255, 255, 255)'
		}}>
			<CurrentWeather/>
			<InformationBlock/>
		</Box>
	);
};

export default WeatherForecastPage;