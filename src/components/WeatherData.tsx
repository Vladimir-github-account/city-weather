import React, { FC, useState }     from 'react';
import WeatherDetails              from './WeatherDetails';
import { IWeatherResponse }        from '../types/weather';
import WeatherHourlyChart          from './WeatherHourlyChart';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box }                     from '@mui/material';
import NavButton                   from './UI/NavButton';
import { navLinkItems }            from '../constants';
import WeatherDailyChart           from './WeatherDailyChart';

interface WeatherDataProps {
	weather: IWeatherResponse;
}

const getNextNavLinkItem = (navLink: string) => {
	if (navLinkItems.includes(navLink)) {
		const currentIndex = navLinkItems.indexOf(navLink);
		return navLinkItems[(currentIndex + 1) % navLinkItems.length];
	}
	return navLinkItems[1];
};

const WeatherData: FC<WeatherDataProps> = ({ weather }) => {
	const isWeatherLoaded = Object.keys(weather).length > 0;
	const [navLink, setNavLink] = useState(getNextNavLinkItem(document.location.pathname));
	const handleClick = () => {
		setNavLink(getNextNavLinkItem(navLink));
	};
	return (
		<Box className="h-1/2 min-h-390px flex flex-col justify-between mt-9 md:mt-6 2xl:mt-10 overflow-x-auto overflow-y-hidden">
			{isWeatherLoaded &&
				<Routes>
					<Route path="/" element={(<WeatherDetails weatherResponse={weather}/>)}/>
					<Route path="/hourly" element={(<WeatherHourlyChart weatherResponse={weather}/>)}/>
					<Route path="/daily" element={(<WeatherDailyChart weatherResponse={weather}/>)}/>
					<Route path="/*" element={(<Navigate to="/"/>)}/>
				</Routes>}
			<hr className={`border-b-1 opacity-40 ${!isWeatherLoaded && 'mt-auto'}`}/>
			{isWeatherLoaded && <NavButton link={navLink} handleClick={handleClick}/>}
		</Box>
	);
};

export default WeatherData;