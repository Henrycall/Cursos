const { obeterPersonagens } = require('./service')

async function main(){
    try {
        const { results } = await obeterPersonagens('a')
        const pesos = results.map(item =>parseInt(item.height))

       const totalPeso = pesos.reduce((anterior,autal) =>{
           return anterior + autal
       })
        

    console.log('TOTAL PESOS' , totalPeso)
    } catch (error) {
        console.log('deu erro aqui :' ,error)
    }
}
main()