import React, {FC, useCallback, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchWeather} from "../store/action-creators/weather";
import {useActions} from "../hooks/useActions";
import WeatherItem from "./WeatherItem";
import { Bars } from  'react-loader-spinner'
import WeatherChart from "./WeatherChart";
import Input from "./Input";

const WeatherLoading: FC = () => {
    const {weather, loading, error} = useTypedSelector(state => state.weather)
    const {fetchWeather} = useActions()

    function useDebounce(callback: Function, delay: number){
        const timer: any = useRef(null);

        const debounceCallback = useCallback((...args) => {
            if(timer.current){
                clearTimeout(timer.current)
            }
            timer.current = setTimeout( () => {
                callback(...args)
            }, delay)
        }, [callback, delay])
        return debounceCallback;
    }

    const handleChange = useDebounce ( async (value: string) => {
        const response = await fetchWeather(value)
    }, 1200)
    return (
        <>
            <Input handleChange={handleChange}/>
            {loading ? <Bars color="#00BFFF" height={80} width={80} ariaLabel='loading' />
                     : error ? <h1>{error}</h1>
                             : <>
                             <WeatherItem weatherResponse={weather} />
                             <WeatherChart weatherResponse={weather}/>
                             </>
        }
        </>
    );
};

export default WeatherLoading;
