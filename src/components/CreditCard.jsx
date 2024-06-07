const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const last4Digits = number.slice(-4)
    const maskedNumber = last4Digits.padStart(number.length, '\u2022').replace(/(\u2022{4})/g, '$1 ').trim()

    const month = expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth

    return (
        <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
            <div className="cc-type">{type}</div>
            <div className="cc-number">{maskedNumber}</div>
            <div>
                <div className="cc-data">
                    <p>Expires {month}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <div className="cc-data">
                    <p>{owner}</p>

                </div>
            </div>

        </div>
    )
}

export default CreditCard