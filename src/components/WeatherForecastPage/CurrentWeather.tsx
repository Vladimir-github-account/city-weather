import React, { useRef }   from 'react';
import { useAppSelector }  from '../../hooks/redux';
import CurrentWeatherText  from './CurrentWeatherText';
import { Box }             from '@mui/material';
import InformationBlock    from './InformationBlock';
import { weatherMainEnum } from '../../types/weather';
import SearchButton        from './SearchButton';
import { MagnifyingGlass } from 'react-loader-spinner';

function getBGImageNumber(currentWeather: string) {
	switch (currentWeather) {
		case weatherMainEnum.RAIN:
			return 1;
		case weatherMainEnum.CLOUDS:
			return 2;
		case weatherMainEnum.CLEAR:
			return 3;
		default:
			return 0;
	}
}

const CurrentWeather = () => {
	const { weather, isLoading } = useAppSelector(state => state.weatherReducer);
	const BGImageNumber = Object.keys(weather).length ? getBGImageNumber(weather?.current?.weather[0]?.main) : 0;
	const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
	const handleClick = () => {
		ref.current?.focus();
	};

	return (
		<Box className="flex relative flex-col md:flex-row w-full h-screen bg-center bg-cover bg-no-repeat text-white overflow-x-hidden scroll-smooth"
			sx={{
				backgroundImage: {
					xs: `url(./${BGImageNumber}-mobile.jpg)`,
					md: `url(./${BGImageNumber}.jpg)`
				}
			}}>
			<Box className="w-full md:w-3/5 min-h-screen flex flex-col">
				{isLoading
				 ? <Box className="flex justify-center items-end mb-8 md:mb-16 xl:mb-24 2xl:mb-36 w-full h-screen">
					 <MagnifyingGlass
						 visible={true}
						 height="130"
						 width="130"
						 ariaLabel="MagnifyingGlass-loading"
						 wrapperStyle={{}}
						 wrapperClass="MagnifyingGlass-wrapper"
						 glassColor="#c0efff"
						 color="#e15b64"
					 />
				 </Box>
				 : Object.keys(weather).length > 0 && <CurrentWeatherText weatherResponse={weather}/>
				}
			</Box>
			<InformationBlock inputRef={ref}/>
			<SearchButton handleClick={handleClick}/>
		</Box>
	);
};

export default CurrentWeather;