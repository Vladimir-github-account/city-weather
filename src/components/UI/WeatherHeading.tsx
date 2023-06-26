import React, { FC }  from 'react';
import { Typography } from '@mui/material';

interface WeatherHeadingProps {
	heading: string;
}

const WeatherHeading: FC<WeatherHeadingProps> = ({ heading }) => {
	return (
		<Typography mb={{ xs: '18px', lg: '14px' }} component="h2" variant="h6" color="white">{heading}</Typography>
	);
};

export default WeatherHeading;