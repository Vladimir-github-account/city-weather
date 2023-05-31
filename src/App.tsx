import React               from 'react';
import WeatherForecastPage from './pages/WeatherForecastPage';
import './index.css';
import { theme }           from './components/theme/Theme';
import { ThemeProvider }   from '@mui/material';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<WeatherForecastPage/>
		</ThemeProvider>
	);
};

export default App;