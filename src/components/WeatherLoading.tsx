import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchWeather} from "../store/action-creators/weather";
import {useActions} from "../hooks/useActions";
import WeatherItem from "./WeatherItem";
import { Bars } from  'react-loader-spinner'

const WeatherLoading: FC = () => {
    const {weather, loading, error} = useTypedSelector(state => state.weather)
    const {fetchWeather} = useActions()
    useEffect(() => {
        fetchWeather()
    }, [])
    if (loading) {
        return	<Bars color="#00BFFF" height={80} width={80} ariaLabel='loading' />
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <WeatherItem weatherResponse={weather} />
    );
};

export default WeatherLoading;