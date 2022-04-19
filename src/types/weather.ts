export interface ICurrent{
    dt: number,
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
    rain?: object,
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
    loading: boolean;
    error: null | string;
}

export enum WeatherActionTypes {
    FETCH_WEATHER = 'FETCH_WEATHER',
    FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
}

interface FetchWeatherAction {
    type: WeatherActionTypes.FETCH_WEATHER;
}

interface FetchWeatherSuccessAction {
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
    payload: IWeatherResponse;
}

interface FetchWeatherErrorAction {
    type: WeatherActionTypes.FETCH_WEATHER_ERROR;
    payload: string;
}

export type WeatherAction = FetchWeatherAction | FetchWeatherSuccessAction | FetchWeatherErrorAction