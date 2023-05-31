import React, { FC, useCallback, useRef } from 'react';
import { fetchWeather }                   from '../../store/action-creators/ActionCreators';
import { useAppDispatch }                 from '../../hooks/redux';
import Input                              from '../Input';

const WeatherLoading: FC = () => {
	const dispatch = useAppDispatch();

	function useDebounce(callback: Function, delay: number) {
		const timer: any = useRef(null);

		const debounceCallback = useCallback((...args: IArguments[]) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		}, [callback, delay]);
		return debounceCallback;
	}

	const handleChange = useDebounce(async (value: string) => {
		dispatch(fetchWeather(value));
	}, 1200);
	return (
		<Input handleChange={handleChange}/>
	);
};

export default WeatherLoading;