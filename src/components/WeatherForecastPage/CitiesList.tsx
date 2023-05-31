import React, { FC }                          from 'react';
import { ListItemButton, ListItemText, List } from '@mui/material';
import { citiesListStyles }                   from '../styles';
import { navbarItems }                        from '../../constants/navbaritems';
import { useAppDispatch }                     from '../../hooks/redux';
import { fetchWeather }                       from '../../store/action-creators/ActionCreators';

const CitiesList: FC = () => {
	const dispatch = useAppDispatch();

	const handleClick = (value: string) => {
		return async () => {
			dispatch(fetchWeather(value));
		};
	};
	return (
		<List disablePadding sx={citiesListStyles}>
			{navbarItems.map(el => (
				<ListItemButton component="li" onClick={handleClick(el.primary)}>
					<ListItemText primaryTypographyProps={{ variant: 'h5' }} primary={el.primary}/>
				</ListItemButton>
			))}
		</List>
	);
};

export default CitiesList;