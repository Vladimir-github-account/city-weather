import React, {FC, useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LocationCityIcon from '@mui/icons-material/LocationCity';


interface InputProps {
    handleChange: any,
    value: string
}

const Input: FC<InputProps> = ({handleChange, value}) => {
    return (
        <div>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <LocationCityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="weatherInput"
            label="Enter city"
            variant="standard"
            value={value}
            autoFocus
            //onChange={(e) => handleChange(e.target.value)}
            onChange={handleChange}
            />
          </Box>
        </div>
    );
};

export default Input;
