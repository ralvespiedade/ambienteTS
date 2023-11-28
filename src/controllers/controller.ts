import {Response, Request} from 'express'

interface Veiculo {
    nome: string,
    marca: string,
    valor: number
}

class Carro implements Veiculo {
    constructor(public nome: string, public marca: string, public valor: number, public portas: number) {}
}

const lista_veiculos: Carro[] = [
    {
        nome: "Corsa",
        marca: "GM",
        valor: 12000,
        portas: 4
    },
    {
        nome: "Fusca",
        marca: "VW",
        valor: 4500,
        portas: 4
    },
    {
        nome: "Fiesta",
        marca: "Ford",
        valor: 11000,
        portas: 4
    }
]



export function get(req: Request, res: Response) {
    const quant_Itens = lista_veiculos.length
    res.send({
        lista_veiculos,
        quant_Itens 
    })
}

export function post(req: Request, res: Response) {
     const {
        nome,
        marca,
        valor,
        portas
     } = req.body

     const novo_carro = `${nome} ${marca}`

     lista_veiculos.push(req.body)

     const message = "Success!"

     res.send({
        message,
        novo_carro
     })
}   

