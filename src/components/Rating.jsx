const Rating = ({ children, style }) => {
    let roundedRate = Math.round(children)

    const filledStars = '★'.repeat(roundedRate)
    const emptyStars = '☆'.repeat(5 - roundedRate)

    return (
        <div style={style}>
            <p className="rating-stars">{filledStars + emptyStars}</p>
        </div>
    )
}

export default Rating