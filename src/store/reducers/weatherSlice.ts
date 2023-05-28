import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeather, WeatherState }     from '../../types/weather';
import { fetchWeather }               from '../action-creators/ActionCreators';

const initialState: WeatherState = {
	weather: {},
	isLoading: false,
	error: '',
};

export const weatherSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchWeather.fulfilled.type]: (state, action: PayloadAction<IWeather[]>) => {
			state.isLoading = false;
			state.error = '';
			state.weather = action.payload;
		},
		[fetchWeather.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchWeather.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	}
});

export default weatherSlice.reducer;