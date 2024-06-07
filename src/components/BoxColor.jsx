const BoxColor = ({ r, g, b, c }) => {

    const rgbToHex = (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    const hexValue = rgbToHex(r, g, b)

    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        border: '1px solid black',
        margin: '1em',
        padding: '2em',
        maxWidth: '40vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const pStyle = {
        color: c,
        fontSize: '1.25em',
        margin: '0'
    }

    return (
        <div style={boxStyle}>
            <p style={pStyle}>{boxStyle.backgroundColor}</p>
            <p style={pStyle}>{hexValue}</p>
        </div>

    )
}

export default BoxColor