import React, { FC, Ref } from 'react';
import TextField          from '@mui/material/TextField';
import Box                from '@mui/material/Box';
import { inputStyles }    from './styles';

interface InputProps {
	handleChange: any;
	inputRef: Ref<any>;
}

const Input: FC<InputProps> = ({ handleChange, inputRef }) => {
	return (
		<Box className="flex items-end mb-2 lg:mb-8 text-gray-500">
			<TextField
				id="weatherInput"
				label="Enter city"
				variant="standard"
				autoFocus
				fullWidth
				sx={inputStyles}
				inputRef={inputRef}
				onChange={(e) => handleChange(e.target.value)}/>
		</Box>
	);
};

export default Input;
