export const currentWeatherContainerStyles = {
	display: 'flex',
	width: '100%',
	height: '100vh',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	color: 'rgb(255, 255, 255)',
	overflow: 'hidden'
};

export const inputStyles = {
	'& .MuiInputLabel-root': { color: 'rgb(107 114 128)', fontSize: '20px' },
	'& .MuiInput-root': { padding: '2px' },
	'& .MuiInput-root::after': { borderBottomColor: 'rgb(176,146,120)' },
	'& .MuiInput-underline:before': { borderBottomColor: 'rgb(107 114 128)', opacity: '0.8' },
	'& .MuiInputBase-input': { color: 'white', fontSize: '20px' }
};

export const citiesListStyles = {
	fontSize: '22px',
	display: 'flex',
	flexDirection: 'column',
	height: '100%'
};