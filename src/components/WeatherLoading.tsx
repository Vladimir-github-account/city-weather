import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchWeather} from "../store/action-creators/weather";
import {useActions} from "../hooks/useActions";
import WeatherItem from "./WeatherItem";

const WeatherLoading: FC = () => {
    const {weather, loading, error} = useTypedSelector(state => state.weather)
    const {fetchWeather} = useActions()
    useEffect(() => {
        fetchWeather()
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <WeatherItem weatherResponse={weather} />
    );
};

export default WeatherLoading;