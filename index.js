const PETSHOP = "*Petshop DH*"


const validarDados = novoPet => {
    return (
        novoPet.nome &&
        novoPet.idade &&
        novoPet.tipo &&
        novoPet.raca &&
        novoPet.genero
    );
};
const addPet = (nome, tipo, raca, idade, genero, vacinado, servico, ) => {
    const pet = {
        nome: nome,
        tipo: tipo,
        raca: raca,
        idade: idade,
        genero: genero,
        vacinado: vacinado,
        servico: servico,
    }
    if (validarDados) {
        console.log("Pet Adicionado com sucesso")
        return pet
    }
    else
        console.log("Dado do pet invalido ou em branco")
}

const pets = [
    addPet("Garfield", 'gato', 'vira-lata', 2, 'M', false, []),
    addPet("Jack", 'cão', 'vira-lata', 1, 'M', false, []),
]

const listarpets = pets => {

    console.log(PETSHOP)
    pets.forEach(pet => {
        console.log("----------------------------------------")
        console.log(
            `
            Nome: ${pet.nome}
            Tipo: ${pet.tipo}
            Raca: ${pet.raca}
            Idade: ${pet.idade}
            Genero:${pet.genero === 'F' ? 'fêmea' : 'macho'}
            Vacinado: ${pet.vacinado ? 'Sim' : 'Não'}
            Serviços: ${pet.servico}`)
        console.log("----------------------------------------")
    });

}


const vacinarPet = pet => {
    if (pet.vacinado)
        console.log(`${pet.nome} já vacinado`)
    else {
        pet.vacinado = true
        console.log(`${pet.nome} vacinado com sucesso`)
    }
}

const checarVacinacao = pets => {
    let pVacinados = pets.filter(pet => pet.vacinado).length

    console.log(`Pets vacinados: ${pVacinados}`)
    console.log(`Pets não vacinados ${pets.length - pVacinados}`)
}

vacinarPet(pets[1])

// listarpets(pets)

checarVacinacao(pets)


const darBanhoPet = () => {
    return 'banho'
}
const tosarPet = () => {
    return 'tosa'
}
const apararUnhasPet = () => {
    return 'aparar'
}

const atenderPets = (pet, ...servicos) => {
    console.log("Bem vindo, " + pet.nome)
    servicos.map(servico => pet.servico.push(servico()))

    console.log("Volte sempre, " + pet.nome)
}
atenderPets(pets[1], darBanhoPet, tosarPet, apararUnhasPet)
atenderPets(pets[0], darBanhoPet, tosarPet)

listarpets(pets)

const searchPet = (nome, pets) => pets.filter(pet => pet.nome.toLowerCase() === nome.toLowerCase())

listarpets(searchPet("Jack", pets))


