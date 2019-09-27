import React from 'react';

const Weather = props => (
	<div className="infoWeath">
	{props.city && 
		<div>
			<p>местоположение: {props.city}, {props.country}</p>
			<p>температура: {props.temp}</p>
			<p>давление: {props.pressure}</p>
			<p>закат солнца: {props.sunset}</p>
		</div>
	}
	<p className="error">{props.error}</p>
	</div>
);

export default Weather;