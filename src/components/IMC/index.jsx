import {form, imc} from './index.module.css'
import ResultFinish from '../ResultFinish';
import { useState, useEffect } from 'react';

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

    useEffect(() => {
        if (release) {
            const timer = setTimeout(() => {
            setRelease(false)
            setResultFinished('')
            setMessage('')
            setColorClassification('')
            setResult('')
        }, 5000)
            return () => clearTimeout(timer) // limpa se o componente desmontar ou mudar
        }
    }, [release])

    return(
        <>
            <h1 className={imc}>Descubra seu IMC</h1>
            <form className={form}>
                <label>Qual sua Altura?</label>
                <input type="number" value={height} onChange={handleHeight}/>

                <label htmlFor="">Qual seu peso</label>
                <input type="number" value={weight} onChange={handleWeight}/>

                <button onClick={handleclick}>IMC</button>

                {release && (
                    <div>
                        <ResultFinish height={height} weight={weight} />   
                    </div>
                )}
            </form>

        </>
    )
}

export default IMC;