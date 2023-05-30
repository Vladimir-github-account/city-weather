import React, { FC }        from 'react';
import { IWeatherResponse } from '../../types/weather';
import { Box, Typography }  from '@mui/material';
import moment               from 'moment';

interface WeatherItemProps {
	weatherResponse: IWeatherResponse,
}

const CurrentWeatherText: FC<WeatherItemProps> = ({ weatherResponse }) => {
	const {
		current, name
	} = weatherResponse;
	return Object.keys(weatherResponse).length === 0
	       ? <p></p>
	       :
	       <Box className="mt-auto mb-36 ml-32 drop-shadow-2xl flex justify-start items-end">
		       <Box className="text-9xl mr-2 relative top-2 font-bold" component="span">
			       {Math.floor(current?.temp)}°
		       </Box>
		       <Box className="flex flex-col align-end justify-end mr-4 h-full">
			       <Typography component="span" variant="h2" fontWeight="500">{name}</Typography>
			       <Typography variant="body1"> {moment().format('h:mm a, dddd, MMM Do \'YY')}</Typography>
		       </Box>
		       <Box className="flex flex-col justify-space-between text-center">
			       <img className="w-20 relative top-2 scale-110 mx-auto"
			            src={`http://openweathermap.org/img/wn/${current?.weather[0]?.icon}.png`}
			            alt="img"/>
			       <Typography variant="body1" sx={{ '&:first-letter': { textTransform: 'capitalize' } }}>
				       {current?.weather[0]?.description}
			       </Typography>
		       </Box>
	       </Box>;
};

export default CurrentWeatherText;
;