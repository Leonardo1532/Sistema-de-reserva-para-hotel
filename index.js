// - Um hotel deve possuir: id, nome, categoria, endereço e telefone;

// - Uma reserva deve possuir: id, id do hotel, nome do responsável,

//   dia de entrada e dia de saída;


// 1 - Crie 2 arrays, um para guardar hotéis e um para reservas

// 2 - Crie funções para cadastrar um hotel e uma reserva;

// 3 - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todas as reservas neste hotel com as seguintes informações: nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída

// 4 - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - dia de entrada - dia de saída

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

// 3 - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todas as reservas neste hotel com as seguintes informações: nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída


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


// 4 - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - dia de entrada - dia de saída


function ExibirId(idReserva) {

    for (let index = 0; index < array.length; index++) {

    }
}