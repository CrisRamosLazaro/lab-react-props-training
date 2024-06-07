const Greetings = ({ lang, children }) => {

    const langs = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    }

    return (
        <div className="greeting-box">
            <h1>{langs[lang]} {children}</h1>
        </div>
    )
}

export default Greetings