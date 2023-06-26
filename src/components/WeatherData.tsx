import React, { FC, useState } from 'react';
import WeatherDetails          from './WeatherDetails';
import { IWeatherResponse }    from '../types/weather';
import WeatherHourlyChart      from './WeatherHourlyChart';
import { Route, Routes }       from 'react-router-dom';
import { Box }                 from '@mui/material';
import NavButton               from './UI/NavButton';
import { navLinkItems }        from '../constants';

interface WeatherDataProps {
	weather: IWeatherResponse;
}

const WeatherData: FC<WeatherDataProps> = ({ weather }) => {
	const isWeatherLoaded = Object.keys(weather).length > 0;
	const [navLink, setNavLink] = useState(navLinkItems[1]);
	const handleClick = () => {
		const currentIndex = navLinkItems.indexOf(navLink);
		const nextIndex = (currentIndex + 1) % navLinkItems.length;
		setNavLink(navLinkItems[nextIndex]);
	};
	return (
		<Box className="h-1/2 min-h-390px flex flex-col justify-between mt-9 md:mt-6 2xl:mt-10 overflow-x-auto overflow-y-hidden">
			{isWeatherLoaded &&
				<Routes>
					<Route path="/" element={(<WeatherDetails weatherResponse={weather}/>)}/>
					<Route path="/hourly" element={(<WeatherHourlyChart weatherResponse={weather}/>)}/>
				</Routes>}
			<hr className={`border-b-1 opacity-40 ${!isWeatherLoaded && 'mt-auto'}`}/>
			{isWeatherLoaded && <NavButton link={navLink} handleClick={handleClick}/>}
		</Box>
	);
};

export default WeatherData;