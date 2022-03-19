const { obeterPersonagens } = require('./service')

Array.prototype.meuFilter = ()=>{
    const lista = []
    for(item in this){
        const item = this[index]
        const result = callback(item,index,this)
        
        if(!result) continue;
        lista.push(item)
    }
    return lista;
} 

async function main(){
    try {
    const { results } = await obeterPersonagens('a')

    const familiaLars = results.filter(item=> {
        // por padrao precisa retornar um booelano 
        // para informar se deve manter ou retirar da lista
        // false remove da lista
        // true mantem na lista

        // nao encontrou = -1
        // encontrou = posicao do array
        const result = item.name.toLowerCase().indexOf('lars') !== -1
        return result
    })
    // const familiaLars = results.meuFilter((item,index,lista) =>{ 
    //     console.log(`Index: ${index}, ${lista.length}`);
    //    return item.name.toLowerCase.indexOf('lars') !== -1  
       
    //     })
      
     const names = familiaLars.map((pessoa) =>  pessoa.name )
     console.log(names)
    } catch (error) {
        console.log(error , " deu erro aqui")
    }
}
main()

