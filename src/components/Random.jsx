const Random = ({ min, max }) => {

    const val = Math.floor(Math.random() * (max - min) + min)

    return (
        <div className="greeting-box">
            <h1>Random value between {min} and {max} {"=>"} {val} </h1>

        </div>
    )
}

export default Random