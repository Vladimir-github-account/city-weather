import React, {FC, useEffect, useState, useCallback, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchWeather} from "../store/action-creators/weather";
import {useActions} from "../hooks/useActions";
import WeatherItem from "./WeatherItem";
import { Bars } from  'react-loader-spinner'
import WeatherChart from "./WeatherChart";
import Input from "./Input";

const WeatherLoading: FC = () => {
    const [value, setValue] = useState('')
    const {weather, loading, error} = useTypedSelector(state => state.weather)
    const {fetchWeather} = useActions()
    //useEffect(() => {
    //    fetchWeather(value)
    //}, [value])

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

    const handleChange2 = useDebounce ( async (value: string) => {
      console.log('handleChange')
      const response = fetchWeather(value)
      console.log('response', response)
      setValue(value)
    }, 500)

    const handleChange = useCallback(async(e) => {
      setValue(e.target.value)
      fetchWeather(e.target.value)
    }, [])

    if (loading) {
        return	<Bars color="#00BFFF" height={80} width={80} ariaLabel='loading' />
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <>
            <WeatherItem weatherResponse={weather} />
            <WeatherChart weatherResponse={weather}/>
            <Input handleChange={handleChange} value={value}/>
        </>
    );
};

export default WeatherLoading;
