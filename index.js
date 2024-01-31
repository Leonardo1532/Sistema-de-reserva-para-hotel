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


// - Um hotel deve possuir: id, nome, categoria, endereço e telefone;
function CadastrarHotel() {
    let idHotel = parseInt(prompt("Insira o ID do hotel"))
    let nomeHotel = prompt("Insira o nome do hotel")
    let categoriaHotel = prompt("Insira a categoria do hotel")
    let enderecoHotel = prompt("Insira o endereço do hotel")
    let telefoneHotel = prompt("Insira o telefone do hotel")

    let hotel = new Hotel(idHotel, nomeHotel, categoriaHotel, enderecoHotel, telefoneHotel)
    hoteis.push(hotel)
}

// - Uma reserva deve possuir: id, id do hotel, nome do responsável,

//   dia de entrada e dia de saída;

function CadastrarReserva() {
    let idReserva = parseInt(prompt("Insira o ID da reserva"))
    let idHotelReserva = parseInt(prompt("Insira o ID do hotel"))
    let nomeRespondavel = prompt("Insira o nome do responsável")
    let diaEntrada = prompt("Insira o dia da entrada")
    let diaSaida = prompt("Insira o dia da saída")

    let reserva = new Reserva(idReserva, idHotelReserva, nomeRespondavel, diaEntrada, diaSaida)
    reservas.push(reserva)
}