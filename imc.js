//switch

function calculate(numero1, operador, numero2){

    let result = 0;
    let analise = ''


switch(operador){
    case '+':
            result = numero1+numero2
        break

    case '-':
            result = numero1-numero2
            break

    case '*':
            result = numero1*numero2
            break

    case '/':
            result = numero1/numero2
            break
    default:
        console.log('not implemented')
            break
}

if(result > 5){
    analise = ', é um número maior que 5'
}else{
    analise = ', é um número menor que 5'
}
return result+analise

}



console.log(calculate(1,'+',3))


/**/




function PessoaSaudavel(){

    let nome_da_pessoa = document.getElementById("nome_do_cidadao").value;
    let idade_da_pessoa = document.getElementById("idade_do_cidadao").value;
    let peso_da_pessoa = document.getElementById("peso_do_cidadao").value;
    let altura_da_pessoa = document.getElementById("altura_do_cidadao").value;
    let imc = peso_da_pessoa/(altura_da_pessoa**2);
    let resultado = ''

        if(imc>=30){
            resultado = 'Está ficando gordinho';
        }else{
            resultado = 'Está no peso ideal'
        }

    document.getElementById("resultado").innerHTML = nome_da_pessoa+" tem "+idade_da_pessoa+" anos pesa "+peso_da_pessoa+" kg e seu Índice de Massa Corporal é "+imc.toFixed(2);
}
