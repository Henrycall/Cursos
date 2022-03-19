const axios = require('axios')
const URL  = 'https://swapi.dev/api/people'


async function obeterPersonagens(name){
    const url =  `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)
    return response.data
}

obeterPersonagens('r2')
    .then((resultado)=>{
        // console.log(resultado)
    })
    .catch((error)=>{
        // console.log('erro' , error)
    })

    module.exports = {
        obeterPersonagens
    }