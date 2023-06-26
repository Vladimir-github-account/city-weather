import React, { FC }       from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Box }             from '@mui/material';

const CurrentWeatherLoading: FC = () => {
	return (
		<Box className="flex justify-center items-end mb-8 md:mb-16 xl:mb-24 2xl:mb-36 w-full h-full">
			<MagnifyingGlass
				visible={true}
				height="130"
				width="130"
				ariaLabel="MagnifyingGlass-loading"
				wrapperStyle={{}}
				wrapperClass="MagnifyingGlass-wrapper"
				glassColor="#c0efff"
				color="#e15b64"
			/>
		</Box>
	);
};

export default CurrentWeatherLoading;