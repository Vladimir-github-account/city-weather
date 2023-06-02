import React, { FC }                                from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { IWeatherResponse }                         from '../../types/weather';

interface WeatherItemProps {
	weatherResponse: IWeatherResponse,
}

const WeatherDetails: FC<WeatherItemProps> = ({ weatherResponse }) => {
	const { current } = weatherResponse;
	const weather: { [index: string]: any } = { ...current };
	const str = current?.weather[0]?.main.toLowerCase();
	return (
		<>
			<Typography mb="24px" component="h2" variant="h6" color="white">Weather details</Typography>
			<List>
				<ListItem disablePadding className="mb-6">
					<ListItemText primaryTypographyProps={{ variant: 'h6' }}>
						Cloudy
					</ListItemText>
					<ListItemText primaryTypographyProps={{ variant: 'h6' }} className="inline-block text-end text-white">
						{current?.clouds}%
					</ListItemText>
				</ListItem>
				<ListItem disablePadding className="mb-6">
					<ListItemText primaryTypographyProps={{ variant: 'h6' }}>
						Humidity
					</ListItemText>
					<ListItemText primaryTypographyProps={{ variant: 'h6' }} className="inline-block text-end text-white">
						{current?.humidity}%
					</ListItemText>
				</ListItem>
				<ListItem disablePadding className="mb-6">
					<ListItemText primaryTypographyProps={{ variant: 'h6' }}>
						Wind
					</ListItemText>
					<ListItemText primaryTypographyProps={{ variant: 'h6' }} className="inline-block text-end text-white">
						{current?.wind_speed}km/h
					</ListItemText>
				</ListItem>
				<ListItem disablePadding className="mb-6">
					<ListItemText primaryTypographyProps={{ variant: 'h6' }}>
						{current?.weather[0]?.main || ''}
					</ListItemText>
					<ListItemText primaryTypographyProps={{ variant: 'h6' }} className="inline-block text-end text-white">
						{weather[str]?.['1h'] && `${weather[str]?.['1h']}mm`}
					</ListItemText>
				</ListItem>
			</List>
		</>
	);
};

export default WeatherDetails;