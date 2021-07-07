
/*Cria  objeto Cliente*/
function client(name,business,email,phone){

    this.name = name,
    this.business = business,
    this.email = email,
    this.phone = phone

}

/*Cria novo cliente*/
function newClient(){
    const client0 = new client(document.querySelector('input.nome'),document.querySelector('input.empresa'),document.querySelector('input.email'),document.querySelector('input.fone'))
}

function enviar () {
    var texto = document.querySelector("input.nome");
    var btn = document.querySelector("input.enviar");
    btn.innerHTML = `${texto}`
}

function teste(){
    alert('Entrando an função');
}