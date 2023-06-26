import { ICurrent, IDaily, IWeatherResponse } from '../../types/weather';
import axios                                  from 'axios';
import moment                                 from 'moment-timezone';
import { createAsyncThunk }                   from '@reduxjs/toolkit';

export const fetchWeather = createAsyncThunk<IWeatherResponse, string>(
	'weather/fetchWeather',
	async (city, thunkAPI) => {
		try {
			const cityCodResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=1b923537dc27d9530021865c13301b15`);
			const response = await axios.get<IWeatherResponse>(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityCodResponse.data[0].lat}&lon=${cityCodResponse.data[0].lon}&exclude=minutely,daily}&appid=1b923537dc27d9530021865c13301b15&units=metric`);
			response.data.name = cityCodResponse.data[0].name;
			response.data.hourly.length = 24;
			response.data.hourly = response.data.hourly.map((el: ICurrent) => {
				el.dt = moment.unix(Number(el.dt)).tz(response.data.timezone).format('h A');
				return el;
			});
			response.data.hourly = response.data.hourly.filter((el, index) => {
				return index % 4 === 0;
			});
			response.data.daily?.shift();
			response.data.daily = response.data.daily?.map((el: IDaily) => {
				el.dt = moment.unix(Number(el.dt)).tz(response.data.timezone).format('ddd');
				el.day_temp = el.temp.day;
				return el;
			});
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Failed to fetch weather data');
		}
	}
);

