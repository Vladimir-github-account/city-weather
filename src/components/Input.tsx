import React, {FC} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LocationCityIcon from '@mui/icons-material/LocationCity';

interface InputProps {
    handleChange: any
}

const Input: FC<InputProps> = ({handleChange}) => {
    return (
        <div>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LocationCityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="weatherInput"
            label="Enter city"
            variant="standard"
            autoFocus
            onChange={(e) => handleChange(e.target.value)}
            />
          </Box>
        </div>
    );
};

export default Input;
