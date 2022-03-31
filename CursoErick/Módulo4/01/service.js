const axios = require('axios')
const { obeterPersonagens } = require('../../Módulo2/for-forin/service')
const nock = require('nock')

const url = 'https://swapi.dev/api/people'

async function ObeterPersonagens(nome){
    const UrlPersonagemEspecifo = `${url}/?search=${nome}&format=json`
    const result = await axios(UrlPersonagemEspecifo)
    const finalResult = result.data.results
    console.log(JSON.stringify(finalResult))
    return  finalResult.map(function mapearPersonagens(finalResult){
     const dataTraded = {
            nome: finalResult.name,
            peso: finalResult.height
        }
        console.log(dataTraded)
        return  dataTraded
        
    })
}

ObeterPersonagens('R2-D2')
module.exports = {
    ObeterPersonagens
}