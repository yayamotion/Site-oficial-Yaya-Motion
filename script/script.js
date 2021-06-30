

let msg = verificarvelocidade(35);
console.log(msg);

function verificarvelocidade (vel){
    
    pontos = vel >= 75 ? (vel - 70)/5: 0 ;

    if (pontos>12){
        return 'Carteira Suspensa'
    }
    else{
        return Math.floor(pontos);
    }

}
