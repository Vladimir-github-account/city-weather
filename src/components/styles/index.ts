export const inputStyles = {
	'& .MuiInputLabel-root': { color: 'rgb(107 114 128)', fontSize: '20px' },
	'& .MuiInput-root': { padding: '2px', width: '65%' },
	'& .MuiInput-root::after': { borderBottomColor: 'rgb(255,255,255)' },
	'& .MuiInput-underline:before': { borderBottomColor: 'rgb(107 114 128)', opacity: '0.8' },
	'& .MuiInputBase-input': { color: 'white', fontSize: { xs: '18px', sm: '24px' } },
	'& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
		borderBottom: '1px solid #A9CEE1',
	},
};

export const citiesListStyles = {
	fontSize: '22px',
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	maxHeight: '330px',
};

export const iconButtonStyles = {
	position: 'absolute',
	top: '0',
	right: '0',
	width: { xs: '80px', md: '112px', lg: '96px', desktop: '112px' },
	height: { xs: '80px', md: '112px', lg: '96px', desktop: '112px' },
	borderRadius: '0',
	backgroundColor: 'rgb(169, 206, 225)',
	'&:hover > .MuiSvgIcon-root': {
		transform: 'scale(1.4)'
	}
};

export const weatherChartPaperStyles = {
	backgroundColor: 'rgba(255,255,255,0.2)',
	width: '100%',
	minHeight: '300px',
	minWidth: '420px',
}