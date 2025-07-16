const ResultFinish = ({weight, height}) => {

    const imc = Number(weight) / (parseFloat(height) * parseFloat(height))
    const resultFinished = parseFloat(imc.toFixed(2))

    let message = "";

    if(resultFinished < 16){
        message = "Você está com magreza grave"
    }

    if(resultFinished > 16 && resultFinished < 16.9){
        message = "Você está com magreza moderada"
    }

    if(resultFinished > 17 && resultFinished < 18.4){
        message = "Você está com magreza leve"
    }

    if(resultFinished > 18.59 && resultFinished < 24.99){
        message = "Você está com o peso normal"
    }

    if(resultFinished > 25 && resultFinished < 29.99){
        message = "Você está com sobrepeso"
    }

    if(resultFinished > 30 && resultFinished < 34.99){
        message = "Você está com obesidade grau I"
    }

    if(resultFinished > 35 && resultFinished < 39.99){
        message = "Você está com obesidade grau II"

    }
    
    if(resultFinished > 40){
        message = "Você está com obesidade grau III (mórbida)"

    }

    return <p>{`${resultFinished} - ${message}`}</p>


}

export default ResultFinish;