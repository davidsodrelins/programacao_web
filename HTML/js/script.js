// alert("OLA JS LINDO DO MEU S2")
// console.log("Eu sou uma mensagem normal")
// console.warn("Eu sou uma mensagem de alerta")
// console.error("Eu sou uma mensagem de Erro")

//Banco de dados capenga tabajara versão 0.0
senhaAdmin = 'paçoca'
usuarioAdmin = 'master'

var app = document.getElementById("app")
//var app = document.querySelector("#app")


var loginEl = document.createElement("input")
loginEl.setAttribute("type","text")
loginEl.setAttribute("placeholder","Escreva o seu nome")
loginEl.setAttribute("id","usuario")
app.appendChild(loginEl)


var senhaEl = document.createElement("input")
senhaEl.setAttribute("type","password")
senhaEl.setAttribute("placeholder","Digite sua senha")
senhaEl.setAttribute("id","senha")
app.appendChild(senhaEl)

// Adicionar a ação echecar o login
var entrarEl = document.createElement("button")
entrarEl.innerHTML = "Entrar"
entrarEl.setAttribute("onclick","checarLogin()")
app.appendChild(entrarEl)

function checarLogin(){    
    if((loginEl.value === usuarioAdmin) 
        && (senhaEl.value===senhaAdmin)){
            alert("Olá " + loginEl.value + " seja bem vindo!")
        }else{
            alert("Usuário ou senha inválidos")
        }
}





