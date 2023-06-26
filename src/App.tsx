import React             from 'react';
import { theme }         from './components/theme/Theme';
import { ThemeProvider } from '@mui/material';
import WeatherForecast   from './components/WeatherForecast';
import './index.css';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<WeatherForecast/>
		</ThemeProvider>
	);
};

export default App;