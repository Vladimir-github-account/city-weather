export interface ICoord {
    lon: number,
    lat: number
}

export interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IMain {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

export interface IWind {
    speed: number,
    deg: 350
}

export interface IClouds {
    all: number
}

export interface ISys {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number,
}

export interface IWeatherResponse {
    coord: ICoord,
    weather: Array<IWeather>,
    base: string,
    main: IMain,
    visibility: number,
    wind: IWind,
    clouds: IClouds,
    dt: number,
    sys: ISys,
    timezone: number,
    id: number,
    name: string,
    cod: number
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