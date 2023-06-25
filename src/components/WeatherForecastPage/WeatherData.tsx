import React, { FC, useState } from 'react';
import WeatherDetails          from './WeatherDetails';
import { IWeatherResponse }    from '../../types/weather';
import WeatherChart            from '../WeatherChart';
import { Route, Routes }       from 'react-router-dom';
import { Box }                 from '@mui/material';
import NavButton               from '../NavButton';
import { navLinkItems }        from '../../constants';

interface CitiesListProps {
	weather: IWeatherResponse;
}

const WeatherData: FC<CitiesListProps> = ({ weather }) => {
	const isWeatherLoaded = Object.keys(weather).length > 0;
	const [navLink, setNavLink] = useState(navLinkItems[0]);
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
					<Route path="/hourly" element={(<WeatherChart weatherResponse={weather}/>)}/>
				</Routes>}
			<hr className={`border-b-1 opacity-40 ${!isWeatherLoaded && 'mt-auto'}`}/>
			{isWeatherLoaded && <NavButton link={navLink} handleClick={handleClick}/>}
		</Box>
	);
};

export default WeatherData;