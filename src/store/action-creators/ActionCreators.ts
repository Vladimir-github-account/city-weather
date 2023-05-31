import { IWeatherResponse } from '../../types/weather';
import axios                from 'axios';
import moment               from 'moment';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk<IWeatherResponse, string>(
	'weather/fetchWeather',
	async (city, thunkAPI) => {
		try {
			const cityCodResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=1b923537dc27d9530021865c13301b15`);
			const response = await axios.get<IWeatherResponse>(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityCodResponse.data[0].lat}&lon=${cityCodResponse.data[0].lon}&exclude=minutely,daily}&appid=1b923537dc27d9530021865c13301b15&units=metric`);
			response.data.name = cityCodResponse.data[0].name;
			response.data.hourly.length = 18;
			response.data.hourly = response.data.hourly.map((el: any) => {
				el.dt = moment(el.dt * 1000 + (response.data.timezone_offset * 1000)).format('h A');
				return el;
			});
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Failed to fetch weather data');
		}
	}
);

