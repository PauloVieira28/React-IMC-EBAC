import './index.css'
import { useState } from 'react';

const IMC = () => {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [release, setRealise] = useState(false)
    const [releaseWeight, setReleaseWeight] = useState(false)
    const [releaseHeight, setReleaseHeight] = useState(false)

    const handleHeight = (event) => {
        setHeight(event.target.value);
        setReleaseHeight(true)
    };  
    
    const handleWeight = (event) => {
        setWeight(event.target.value);
        setReleaseWeight(true)
    };


    const handleclick = (e) => {
        e.preventDefault();
        setRealise(true)

    }

    const final = () => {
        //aplicar const imc = peso / (altura * altura);

        return Number(height) + Number(weight)
    }
    return(
        <>
            <h1>IMC</h1>
            <form className="form">
                <label>Qual sua Altura?</label>
                <input type="number" value={height} onChange={handleHeight}/>

                <label htmlFor="">Qual seu peso</label>
                <input type="number" value={weight} onChange={handleWeight}/>

                <button onClick={handleclick}>IMC</button>

                {release && (
                    <p>Soma: {final()}</p>
                )}
            </form>

        </>
    )
}

export default IMC;