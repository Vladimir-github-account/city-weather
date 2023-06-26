import React, { FC }        from 'react';
import { Search }           from '@mui/icons-material';
import { IconButton }       from '@mui/material';
import { iconButtonStyles } from './styles';

interface SearchButtonProps {
	handleClick: any;
}

const SearchButton: FC<SearchButtonProps> = ({ handleClick }) => {
	return (
		<IconButton aria-label="search"
		            size="large"
		            color="primary"
		            onClick={handleClick}
		            sx={iconButtonStyles}>
			<Search fontSize="inherit"/>
		</IconButton>
	);
};

export default SearchButton;