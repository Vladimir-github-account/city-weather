import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {

	}

	interface ThemeOptions {

	}
}

export const theme = createTheme({
	components: {
		MuiListItem: {
			defaultProps: {
				disablePadding: true
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: {
					padding: '0',
					'& .MuiTouchRipple-root': {
						display: 'none'
					}
				}
			}
		}
	}
});