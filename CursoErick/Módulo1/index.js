
function getUser(){
    // quando der algum problema, 
    return new Promise(function resolveFunction(resolve,reject){
        setTimeout(() => {
            return resolve({
          
            id : 1,
            nome: "Henry",
            dataNascimento : new Date()
               
            } )
         }, 1000);

    })

}

function getPhone(idUsario){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        
            return resolve({
                telefone : '9676876992',
                dd:11
            })
        }, 2000);

    })
    

}
function getEndereco(idUsario){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        
            return resolve({
                rua : 'Rua dos bobo',
                Numero:5
            })
        }, 2000);

    })
}
main()
async function main (){

try {
    console.time('medida-promise')
    const user = await getUser()
    const result = await  Promise.all([
        getPhone(user.id),
        getEndereco(user.id)
    ])
    const phone = result[0]
    const endereco = result[1]
    
    console.log(`
    Nome: ${user.nome},
    Telefone: ${phone.telefone},
    Endereco: ${endereco.rua},
    N: ${endereco.Numero}`)
    console.timeEnd('medida-promise')
} catch (error) {
    console.log('DEU ERRO',error)
}

}

/// MY TESTEEEEEE == 
// getData()
// async function getData(){
//     try {
//         const getUsertraded = await getUser()
//         const getEnderecoTraded = await getEndereco(getUsertraded.id)

//         const dataTrated = await {
//             "User iD": getUsertraded.id,
//             "Nome":getUsertraded.nome,
//             "Endereco":getEnderecoTraded.rua
//         }
//         console.log(dataTrated)
         
//     } catch (error) {
//         console.log(error)
//     }
// }