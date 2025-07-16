import {red, moderate, light, normal, result} from './index.module.css'

const ResultFinish = ({weight, height}) => {

    const imc = Number(weight) / (parseFloat(height) * parseFloat(height))
    const resultFinished = parseFloat(imc.toFixed(2))

    let message = ""
    let coloClassification = ""

    if(resultFinished < 16){
        message = "Você está com magreza grave"
        coloClassification = red
    }

    if(resultFinished > 16 && resultFinished < 16.99){
        message = "Você está com magreza moderada"
        coloClassification = moderate
    }

    if(resultFinished > 17 && resultFinished < 18.4){
        message = "Você está com magreza leve"
        coloClassification = light
    }

    if(resultFinished > 18.59 && resultFinished < 24.99){
        message = "Você está com o peso normal"
        coloClassification = normal
    }

    if(resultFinished > 25 && resultFinished < 29.99){
        message = "Você está com sobrepeso"
        coloClassification = moderate
    }

    if(resultFinished > 30 && resultFinished < 34.99){
        message = "Você está com obesidade grau I"
        coloClassification = light
    }

    if(resultFinished > 35 && resultFinished < 39.99){
        message = "Você está com obesidade grau II"
        coloClassification = moderate


    }
    
    if(resultFinished > 40){
        message = "Você está com obesidade grau III (mórbida)"
        coloClassification = red
    }

    return <p className={`${coloClassification} ${result}`} >{`O seu IMC é: ${resultFinished} - ${message}`}</p>


}

export default ResultFinish;