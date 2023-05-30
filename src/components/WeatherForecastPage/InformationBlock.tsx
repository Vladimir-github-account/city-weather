import React, { FC }  from 'react';
import { Box }        from '@mui/material';
import WeatherLoading from '../WeatherLoading';

const InformationBlock: FC = () => {
	return (
		<Box sx={{
			backgroundColor: 'rgba(0, 0, 0, 0.6)',
			width: '35%'
		}}>
			<WeatherLoading/>
		</Box>
	);
};

export default InformationBlock;