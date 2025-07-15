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

            const imc = Number(weight) / (Number(height) * Number(height))
            const resultFinished = parseFloat(imc.toFixed(2))

            if(resultFinished < 16){
                return(
                    <p>Você está com magreza grave</p>
                )
            }

            if(resultFinished > 16 & resultFinished < 16.9){
                return(
                    <p>{`${resultFinished} Você está com magreza moderada`}</p>
                )
            }

            if(resultFinished > 17 & resultFinished < 18.4){
                return(
                    <p>Você está com magreza leve</p>
                )
            }

            if(resultFinished > 18.5 & resultFinished < 24.9){
                return(
                        
                        <p>{`${resultFinished} Você está com o peso normal`}</p>
                )
            }

            if(resultFinished > 30 & resultFinished < 34.9){
                return(
                    <p>{`${resultFinished} Você está com sobrepeso`}</p>
                )
            }

            if(resultFinished > 30 & resultFinished < 34.9){
                return(
                    <p>{`${resultFinished} Você está com obesidade grau I`}</p>
                )
            }

            if(resultFinished > 35 & resultFinished < 39.9){
                return(
                    <p>{`${resultFinished} Você está com obesidade grau I`}</p>
                )
            }
            
            if(resultFinished > 40){
                return(
                    <p>{`${resultFinished} Você está com obesidade grau III (mórbida)`}</p>
                )
            }


    }

    /*
    Menor que 16,0	Magreza grave
    16,0 a 16,9	Magreza moderada
    17,0 a 18,4	Magreza leve
    18,5 a 24,9	Peso normal (adequado)
    25,0 a 29,9	Sobrepeso
    30,0 a 34,9	Obesidade grau I
    35,0 a 39,9	Obesidade grau II (severa)
    40,0 ou mais	Obesidade grau III (mórbida) 
    */
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
                    <>
                        <p>O seu imc é: {final()}</p>
                    </>    
                )}
            </form>

        </>
    )
}

export default IMC;