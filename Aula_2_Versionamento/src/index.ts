/*

Exercício:
Considere um sistema de cadastro de usuários onde precisamos armazenar informações sobre os usuários. 
Vamos criar variáveis e objetos para representar diferentes tipos de dados relacionados a um usuário.

1- Crie as seguintes variáveis primitivas:*/
let nomeCompleto: string = "oi"
let idade: number = 2
let email: string = "23123@gmail.com"
let isAtivo: boolean = true
/*
2 -Crie um objeto usuario com as seguintes propriedades:

*/
let Usuario: {

    nome: string,
    sobrenome: string,
    idade: number,
    contato: string,
    email: string,
    telefone: number
}

   Usuario = {
        nome: "Caue",
        sobrenome: "Moura",
        idade: 2,
        contato: "212d3qxa",
        email: "dasdas",
        telefone: 232
   }
   console.log(Usuario.nome)


   

   /*
    Em seguida, imprima todas as variáveis e propriedades do objeto usuario usando console.log.
    */  
    
    /*
*/


/*

Exercício:
Vamos criar um sistema de gestão de produtos para uma loja online. 
Precisamos armazenar informações sobre diferentes produtos disponíveis na loja. Vamos criar variáveis e objetos para representar esses produtos.

01 - Crie as seguintes variáveis primitivas:
*/
    var nomeProduto: string
    var preco: number
    var disponivel: boolean

    /*

02 - Crie um objeto produto com as seguintes propriedades:
    */
   type Produto = {
        nome: String
        preço: Number
        estoque: Number
        categorias: String[]
    }
    /*
    Em seguida, imprima todas as variáveis e propriedades do objeto produto usando console.log.
    /*

    */
   /*
*/