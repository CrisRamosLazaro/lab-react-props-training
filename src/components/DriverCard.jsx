import Rating from "./Rating"

const DriverCard = ({ name, rating, img, car }) => {
    return (

        <div className="driver-card">
            <div className="driver-card-picbox">
                <img src={img} />
            </div>
            <div className="driver-card-info">
                <h2>{name}</h2>
                <Rating style={{ color: 'white' }}>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>

            </div>


        </div>
    )
}

export default DriverCard