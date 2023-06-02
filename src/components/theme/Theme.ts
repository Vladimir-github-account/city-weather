import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {

	}

	interface ThemeOptions {

	}
}

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
		}
	},
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