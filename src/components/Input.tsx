import React, { FC }   from 'react';
import TextField       from '@mui/material/TextField';
import Box             from '@mui/material/Box';
import { inputStyles } from './styles';

interface InputProps {
	handleChange: any;
}

const Input: FC<InputProps> = ({ handleChange }) => {
	return (
		<Box className="flex items-end mb-8 text-gray-500">
			<TextField
				id="weatherInput"
				label="Enter city"
				variant="standard"
				autoFocus
				fullWidth
				sx={inputStyles}
				onChange={(e) => handleChange(e.target.value)}/>
		</Box>
	);
};

export default Input;
