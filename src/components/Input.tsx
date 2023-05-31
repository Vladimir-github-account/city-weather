import React, { FC } from 'react';
import TextField     from '@mui/material/TextField';
import Box           from '@mui/material/Box';

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
				sx={{
					'& .MuiInputLabel-root': { color: 'rgb(107 114 128)', fontSize: '20px' },
					'& .MuiInput-root': { padding: '2px' },
					'& .MuiInput-root::after': { borderBottomColor: 'rgb(176,146,120)' },
					'& .MuiInput-underline:before': { borderBottomColor: 'rgb(107 114 128)', opacity: '0.8' },
					'& .MuiInputBase-input': { color: 'white', fontSize: '20px' }
				}}
				onChange={(e) => handleChange(e.target.value)}/>
		</Box>
	);
};

export default Input;
