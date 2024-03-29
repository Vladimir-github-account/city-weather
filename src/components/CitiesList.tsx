import React, { FC, useEffect, useState }     from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { citiesListStyles }                   from './styles';
import { citiesListItems }                    from '../constants/citiesListItems';
import { useAppDispatch }                     from '../hooks/redux';
import { fetchWeather }                       from '../store/action-creators/ActionCreators';
import { ICitiesListItems, IWeatherResponse } from '../types/weather';

interface CitiesListProps {
	weather: IWeatherResponse;
}

const CitiesList: FC<CitiesListProps> = ({ weather }) => {
	const dispatch = useAppDispatch();
	const handleClick = (value: string) => {
		return async () => {
			dispatch(fetchWeather(value));
		};
	};
	const [listItems, setListItems] = useState<Array<ICitiesListItems>>(citiesListItems);

	useEffect(() => {
		const listItemsInStorage = JSON.parse(localStorage.getItem('citiesList') as string);
		if (listItemsInStorage) {
			setListItems(listItemsInStorage);
		}
	}, []);

	useEffect(() => {
		setListItems((prevState) => {
			if (!weather.name) {
				return prevState;
			}
			const i = prevState.findIndex(e => e.primary === weather.name);
			if (i === -1) {
				const state = prevState.map(el => el);
				state.unshift({ id: prevState[prevState.length - 1].id, primary: weather.name });
				state.pop();
				return state;
			} else {
				const lastClickedEl = prevState[i];
				return prevState.map((el, index) => {
					if (index === 0) {
						return lastClickedEl;
					}
					if (index <= i) {
						return prevState[index - 1];
					}
					return el;
				});
			}
		});
	}, [weather.name]);

	useEffect(() => {
		localStorage.setItem('citiesList', JSON.stringify(listItems));
	}, [listItems]);

	return (
		<List disablePadding sx={citiesListStyles}>
			{listItems.map(el => (
				<ListItemButton component="li" onClick={handleClick(el.primary)} key={el.id}>
					<ListItemText sx={{ '&:hover': { color: 'white' } }}
					              primaryTypographyProps={{ variant: 'h6' }}
					              primary={el.primary}/>
				</ListItemButton>
			))}
		</List>
	);
};

export default CitiesList;