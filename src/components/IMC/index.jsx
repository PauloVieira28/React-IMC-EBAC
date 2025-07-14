import './index.css'

const IMC = () => {
    return(
        <>
            <h1>IMC</h1>
            <form className="form">
                <label>Qual sua Altura?</label>
                <input type="float" />

                <label htmlFor="">Qual seu peso</label>
                <input type="number" />

                <button>IMC</button>
            </form>
        </>
    )
}

export default IMC;