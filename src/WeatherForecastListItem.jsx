import './WeatherForecast.css'

const WeatherForecastListItem = (props) => {
    const { day, img, imgAlt, conditions, time } = props
    return (
        <section className='weather'>
            <h2>{day}</h2>
            <img src={img} alt={imgAlt} />
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </section>
    )
}

export default WeatherForecastListItem