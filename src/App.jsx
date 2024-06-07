import "./App.css"
import IdCard from "./components/IdCard"
import idCardData from "./data/idCardData"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import BoxColor from "./components/BoxColor"
import CreditCard from "./components/CreditCard"
import creditCardData from "./data/creditCardData"
import Rating from "./components/Rating"
import DriverCard from "./components/DriverCard"
import driverCardData from "./data/driverCardData"

function App() {

  const langs = ["de", "en", "es", "fr"]

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
        {idCardData.map((card, i) => {
          return <IdCard
            key={i}
            lastName={card.lastName}
            firstName={card.firstName}
            gender={card.gender}
            height={card.height}
            birth={card.birth}
            picture={card.picture}
          />
        })}
      </div>
      <div>
        <Greetings lang={"de"}>Ludwig </Greetings>
        <Greetings lang={"fr"}>François </Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={25} max={100} />
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} c={'#fff'} />
        <BoxColor r={128} g={255} b={0} c={'#000'} />
      </div>
      <div className="cc-div">
        {creditCardData.map((card, i) => {
          const { type, number, expirationMonth: month, expirationYear: year, bank, owner, bgColor, color } = card
          return <CreditCard
            key={i}
            type={type}
            number={number}
            expirationMonth={month}
            expirationYear={year}
            bank={bank}
            owner={owner}
            bgColor={bgColor}
            color={color}
          />
        })}
      </div>
      <div className='ratings-div'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        {driverCardData.map((card, i) => {
          const { name, rating, img, car: { model, licensePlate } } = card
          return <DriverCard
            key={i}
            name={name}
            rating={rating}
            img={img}
            car={{
              model: model,
              licensePlate: licensePlate
            }}
          />
        })}
      </div>
    </div>
  )
}

export default App
