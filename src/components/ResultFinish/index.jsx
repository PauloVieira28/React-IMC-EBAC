import {red, moderate, light, normal, result} from './index.module.css'
import { useState, useEffect } from 'react'

const ResultFinish = ({weight, height}) => {

    const [visible, setVisible] = useState(true)

    const imc = Number(weight) / (parseFloat(height) * parseInt(height))
    const resultFinished = parseFloat(imc.toFixed(2))

    let message = ""
    let colorClassification = ""

    if(resultFinished < 16){
        message = "Você está com magreza grave"
        colorClassification = red
    }

    if(resultFinished > 16 && resultFinished < 16.99){
        message = "Você está com magreza moderada"
        colorClassification = moderate
    }

    if(resultFinished > 17 && resultFinished < 18.4){
        message = "Você está com magreza leve"
        colorClassification = light
    }

    if(resultFinished > 18.59 && resultFinished < 24.99){
        message = "Você está com o peso normal"
        colorClassification = normal
    }

    if(resultFinished > 25 && resultFinished < 29.99){
        message = "Você está com sobrepeso"
        colorClassification = moderate
    }

    if(resultFinished > 30 && resultFinished < 34.99){
        message = "Você está com obesidade grau I"
        colorClassification = light
    }

    if(resultFinished > 35 && resultFinished < 39.99){
        message = "Você está com obesidade grau II"
        colorClassification = moderate


    }
    
    if(resultFinished > 40){
        message = "Você está com obesidade grau III (mórbida)"
        colorClassification = red
    }

    useEffect(() => {
        const timer = setTimeout(() => {
        setVisible(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])


    if(!visible){
        return null
    }

    return (
        <p className={`${colorClassification} ${result}`}>
        {`O seu IMC é: ${resultFinished} - ${message}`}
        </p>
    )
}

export default ResultFinish;