var a = 1 //variavel inteira
var b = [1,2] //vetor
var c = { //objeto
            nome : "david",
            idade :28,
            rico : false,
            endereco : {
                         rua:"Rua A",
                         bairro: "Aguas Claras [Nárnia]",
                         cidade: "Salvador",
                         cep: "41.310-670"
                       },
            telefone : {
                            fixo:"3305-8159",
                            celular: "+5571992035786",
                            comercial: "3256-8965",
                            recado:"+1555236"
                        }
        }
var d = "Jocicleidson" //variavel string
var e = true //booleano
var f = function (){
            alert("sou uma função!")
        }
var g = [] //vetor vazio
var h = null //variavel nula
var i = {} //objeto vazio
var j = {[1,2]} //objeto com o vetor dentro
var objeto = { //objeto
    nome : "david",
    idade :28,
    rico : false,
    mostrarMensagem : function (){ //metodo
            console.log(this.nome)
           },
    endereco : {
                 rua:"Rua A",
                 bairro: "Aguas Claras [Nárnia]",
                 cidade: "Salvador",
                 cep: "41.310-670"
               },
    telefone : {
                    fixo:"3305-8159",
                    celular: "+5571992035786",
                    comercial: "3256-8965",
                    recado:"+1555236"
                }
}
