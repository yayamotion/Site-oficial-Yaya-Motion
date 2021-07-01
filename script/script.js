
function post(titulo,mensagemp,autorp,visualizacoes,aovivo,mensagemc,autorc){

    this.titulo = titulo,
    this.mensagem = mensagemp,
    this.autor = autorp,
    this.visualizacoes = visualizacoes,
    this.coment = {
        mensagemc : mensagemc,
        autorc : autorc
    }
    this.aovivo = aovivo

}

const post1 = new post('olá mundo!','Gostaria de dar olá ao mundo do java script','allan','999',true,'oi nada trouxa','Nenel');

console.log(post1);