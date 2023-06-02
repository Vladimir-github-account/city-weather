import React, { FC }        from 'react';
import { IWeatherResponse } from '../../types/weather';
import { Box, Typography }  from '@mui/material';
import moment               from 'moment-timezone';

interface WeatherItemProps {
	weatherResponse: IWeatherResponse,
}

const CurrentWeatherText: FC<WeatherItemProps> = ({ weatherResponse }) => {
	const {
		current, name, timezone
	} = weatherResponse;
	return (
		<Box className="md:fixed md:bottom-0 w-full mt-auto drop-shadow-2xl flex">
			<Box className="flex mb-8 md:mb-16 xl:mb-24 2xl:mb-36 ml-5 lg:ml-16 2xl:ml-36 flex-col xl:flex-row justify-start items-start xl:items-end">
				<Box className="text-8xl sm:text-9xl mr-2 relative top-3 font-bold"
				     component="span">
					{Math.floor(current?.temp)}°
				</Box>
				<Box className="flex no-wrap w-full items-end">
					<Box className="flex flex-col align-end justify-end md:max-lg:max-w-85 w-full mr-2 xl:mr-4 h-full">
						<Typography whiteSpace="nowrap"
						            overflow="hidden"
						            textOverflow="ellipsis"
						            component="span"
						            fontWeight="500"
						            sx={{ typography: { sm: 'h3', xs: 'h4' } }}>
							{name}
						</Typography>
						<Typography noWrap variant="body1"> {moment().tz(timezone).format('h:mm a, dddd, MMM Do \'YY')}</Typography>
					</Box>
					<Box className="flex flex-col justify-space-between text-center hidden sm:block">
						<img className="w-16 xl:w-20 relative top-2 scale-110 mx-auto select-none"
						     src={`http://openweathermap.org/img/wn/${current?.weather[0]?.icon}.png`}
						     draggable={false}
						     alt="img"/>
						<Typography noWrap variant="body1" sx={{ '&:first-letter': { textTransform: 'capitalize' } }}>
							{current?.weather[0]?.description}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>);
};

export default CurrentWeatherText;