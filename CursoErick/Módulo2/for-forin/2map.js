const service = require("../for-forin/service")


Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = [];


    for(let i = 0; i <= this.length -1; i++){
        const resultado = callback(this[i],i)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado
}

async function main(){
    try {
        const results = await service.obeterPersonagens('a')
        // results.results.forEach(function(item){
        //     names.push(item.name)
        // })
        // const names = results.results.map((pessoa)=>{
        //    return  pessoa.name
        // })
        // const names = results.results.map(pessoa => pessoa.name)

        const names = results.results.meuMap(function(pessoa,i){
            // com possibildade de printar o I (indice tbm);
            return pessoa.name
        })
        console.log('names' , names )
    } catch (error) {
        console.error('ERRO É' , error)
    }
}
main()