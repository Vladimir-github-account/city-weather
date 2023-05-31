import React, { FC }                          from 'react';
import { ListItemButton, ListItemText, List } from '@mui/material';
import { citiesListStyles }                   from '../styles';

const CitiesList: FC = () => {
	return (
		<List
			disablePadding
			sx={citiesListStyles}>
			<ListItemButton component="a" href="#simple-list">
				<ListItemText className="mt-4" primaryTypographyProps={{ variant: 'h5' }} primary="New York"/>
			</ListItemButton>
			<ListItemButton component="a" href="#simple-list">
				<ListItemText primaryTypographyProps={{ variant: 'h5' }} primary="California"/>
			</ListItemButton>
			<ListItemButton component="a" href="#simple-list">
				<ListItemText primaryTypographyProps={{ variant: 'h5' }} primary="Manchester"/>
			</ListItemButton>
			<ListItemButton component="a" href="#simple-list">
				<ListItemText primaryTypographyProps={{ variant: 'h5' }} primary="Birmingham"/>
			</ListItemButton>
			<ListItemButton component="a" href="#simple-list">
				<ListItemText primaryTypographyProps={{ variant: 'h5' }} primary="Liverpool"/>
			</ListItemButton>
		</List>
	);
};

export default CitiesList;