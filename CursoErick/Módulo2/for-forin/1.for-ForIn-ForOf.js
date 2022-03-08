const service = require('./service')

async function main(){
    try {
         const result = await service.obeterPersonagens('a')
         const names = []

        // console.time('for')
        // for(let i = 0; i< result.results.length ; i++){
        //     const pessoa = result.results[i]
        //     names.push(pessoa.name)
            
        // }
        // console.timeEnd('for')
        
        // console.log('names', names )
        // console.time('for-in')
        for(let i in result.results){
            const pessoa = result.result[i]
            names.push(pessoa.name)
            
        }
        // console.timeEnd('for-in')
        // console.time('forof')
        // for(pessoa of result.results){
        //     names.push(pessoa.name)
        // }
        // console.log('names', names)
        // console.timeEnd('forof')
    } catch (error) {
        console.log('erro', error)
    }
}
main()