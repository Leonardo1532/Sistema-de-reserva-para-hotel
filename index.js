// - Um hotel deve possuir: id, nome, categoria, endereço e telefone;

// - Uma reserva deve possuir: id, id do hotel, nome do responsável,

//   dia de entrada e dia de saída;


// 1 - Crie 2 arrays, um para guardar hotéis e um para reservas

// 2 - Crie funções para cadastrar um hotel e uma reserva;

// 3 - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todas as reservas neste hotel com as seguintes informações: nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída

// 4 - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - dia de entrada - dia de saída

// 5 - Crie uma função que recebe como parâmetro o nome de uma pessoa e exibe na tela todas as suas reservas;

// 6 - Crie uma função que recebe como parâmetro uma categoria e retorna um array com todos os hotéis nessa categoria;

// 7 - Crie uma função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone de cadastro com o número recebido;

// 8 - Crie um fluxo de funcionamento para o algoritmo, o usuário deve poder escolher quando encerrar o programa.


let hoteis = []
let reservas = []


class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone

    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}


class Reserva {
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida

    constructor(id, idHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdHotel = idHotel
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

function CadastrarHotel() {
    let idHotel = parseInt(prompt("Insira o ID do hotel"))
    let nomeHotel = prompt("Insira o nome do hotel")
    let categoriaHotel = prompt("Insira a categoria do hotel")
    let enderecoHotel = prompt("Insira o endereço do hotel")
    let telefoneHotel = prompt("Insira o telefone do hotel")

    let hotel = new Hotel(idHotel, nomeHotel, categoriaHotel, enderecoHotel, telefoneHotel)


    if (!hoteis.some(x => x.Id == idHotel)) {
        hoteis.push(hotel)
    } else {
        console.log("Hotel com ID ja existente")
    }
}

function CadastrarReserva() {
    let idReserva = parseInt(prompt("Insira o ID da reserva"))
    let idHotelReserva = parseInt(prompt("Insira o ID do hotel"))
    let nomeRespondavel = prompt("Insira o nome do responsável")
    let diaEntrada = parseInt(prompt("Insira o dia da entrada"))
    let diaSaida = parseInt(prompt("Insira o dia da saída"))

    let reserva = new Reserva(idReserva, idHotelReserva, nomeRespondavel, diaEntrada, diaSaida)

    if (diaEntrada < diaSaida) {

        if (hoteis.some(x => x.Id == idHotelReserva)) {
            reservas.push(reserva)
        } else {
            console.error("Hotel não existe no sistema")
        }
    } else {
        console.error("Dia de entrada não pode ser maior que o dia de saída")
    }
}


function ExibirReservas(idHotel) {

    for (let index = 0; index < hoteis.length; index++) {
        if (idHotel === hoteis[index].Id) {
            for (let index2 = 0; index2 < reservas.length; index2++) {
                if (hoteis[index].Id === reservas[index2].IdHotel) {
                    console.log("Nome do hotel: " + hoteis[index].Nome)
                    console.log("Nome do Responsável: " + reservas[index2].NomeResponsavel)
                    console.log("Dia de entrada: " + reservas[index].DiaEntrada)
                    console.log("Dia de saída: " + reservas[index].DiaSaida)
                }
            }
        }
    }
}


function ExibirId(idReserva) {

    for (let index = 0; index < reservas.length; index++) {
        if (idReserva === reservas[index].Id) {
            for (let index2 = 0; index2 < hoteis.length; index2++) {
                if (reservas[index].IdHotel === hoteis[index2].Id) {
                    console.log("Nome do hotel: " + hoteis[index2].Nome)
                    console.log("Endereço do hotel: " + hoteis[index2].Endereco)
                    console.log("Dia de entrada: " + reservas[index].DiaEntrada)
                    console.log("Dia de saída: " + reservas[index].DiaSaida)
                }
            }
        }
    }
}


function ExibirNomePessoa(nomePessoa) {
    for (let index = 0; index < reservas.length; index++) {
        if (nomePessoa === reservas[index].NomeResponsavel) {
            console.log(reservas[index])
        }
    }
}


function ExibirCategoria(categoriaHotel) {
    let arrayCategoria = []

    for (let index = 0; index < hoteis.length; index++) {
        if (categoriaHotel === hoteis[index].Categoria) {
            arrayCategoria.push(hoteis[index])
        }
    }
    console.log(arrayCategoria)
    return arrayCategoria
}

// 7 - Crie uma função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone de cadastro com o número recebido;

function AtualizarTelefone(IdHotel, telefone) {
    for (let index = 0; index < hoteis.length; index++) {
        if (IdHotel === hoteis[index].Id) {
            hoteis[index].Telefone = telefone
            console.log("Telefone atualizado")
        }
    }
}





// 8 - Crie um fluxo de funcionamento para o algoritmo, o usuário deve poder escolher quando encerrar o programa.

let opcao = prompt("Insira a opção desejada, 1: cadastrar um hotel / 2: cadastrar uma reserva / 3: Exibir reservas pelo ID do hotel/ 4: Exibir informações pelo ID da reserva/ 5: Exibir reservas pelo nome do Responsável / 6: Exibir hotéis pela categoria / 7: Atualizar um telefone do cadastro / 8: Encerrar programa")

let condition = true
while (condition) {
    switch (opcao) {
        case "1":
            CadastrarHotel()
            break;
        case "2":
            CadastrarReserva()
            break;
        case "3":
            let idHotel = parseInt(prompt("Insira o id do Hotel para exibir informações"))
            ExibirReservas(idHotel)
            break;
        case "4":
            let idReserva = parseInt(prompt("Insira um ID de uma reserva para exibir informações"))
            ExibirId(idReserva)
            break;
        case "5":
            let nomePessoa = prompt("Insira o nome de uma pessoa para ser exibido as suas reservas")
            ExibirNomePessoa(nomePessoa)
            break;
        case "6":
            let categoriaHotel = prompt("Insira a categoria do Hotel para exibir os hoteis desta categoria")
            ExibirCategoria(categoriaHotel)
            break;
        case "7":
            let IdHotel = parseInt(prompt("Insira o ID do hotel para atualizarmos o telefone"))
            let telefone = prompt("Insira o telefone correto para atualizarmos")
            AtualizarTelefone(IdHotel, telefone)
            break;
        case "8":
            condition = false
            break;
        default:
            console.log("Default")
            break;
    }
}