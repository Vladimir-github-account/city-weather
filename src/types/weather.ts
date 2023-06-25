interface IRain {
	[key: string]: string;
}

export interface ICurrent {
	dt: number | string,
	sunrise?: number,
	sunset?: number,
	temp: number,
	feels_like: number,
	pressure: number,
	humidity: number,
	dew_point: number,
	uvi: number,
	clouds: number,
	visibility: number,
	wind_speed: number,
	wind_deg: number,
	wind_gust?: number,
	weather: Array<IWeather>,
	rain?: IRain,
	pop?: number,
}

export interface IWeather {
	id: number,
	main: string,
	description: string,
	icon: string
}

export interface IWeatherResponse {
	lon: number,
	lat: number,
	name: string,
	timezone: string,
	timezone_offset: number,
	current: ICurrent,
	weather: Array<IWeather>,
	minutely?: Array<object>,
	hourly: Array<ICurrent>,
	daily?: Array<object>,
	alerts: Array<object>,
}

export interface WeatherState {
	weather: any;
	isLoading: boolean;
	error: string;
}

export enum weatherMainEnum {
	RAIN = 'Rain',
	CLOUDS = 'Clouds',
	CLEAR = 'Clear',
}

export interface ICitiesListItems {
	readonly id: number;
	readonly primary: string;
}