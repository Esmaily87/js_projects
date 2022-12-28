function TamanhoImovel(tipo, area){
    this.tipo = tipo;
    this.area = area;
}

let casa1;


function mostrar(casa){

    casa.preventDefault();

    casa1 = new TamanhoImovel
            (
                document.getElementById('tipo').value,
                document.getElementById('area').value
            );
    

    console.log(casa1)
    

    document.getElementById('1').innerHTML = casa1.tipo+" com área de "+casa1.area+" m²";


    

}



function TamanhodoPacote(alt,lar,com){
    this.alt = alt;
    this.lar = lar;
    this.com = com;
}
let pacote1;

function calculeArea(pacotecabe){

    pacotecabe.preventDefault();
  
    pacote1 = new TamanhodoPacote (
                document.getElementById('altura').value, 
                document.getElementById('largura').value,
                document.getElementById('comprimento').value
            );

    
    console.log(pacote1)
    let volume = pacote1.alt*pacote1.lar*pacote1.lar;
    console.log(volume)
    document.getElementById('2').innerHTML = volume;

 

}

function mostrarCurriculo(){

  
    let element = document.getElementById('cvlattes');
    element.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/azccmhEBp7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

 

}

function esconderCurriculo(){

  
    let element = document.getElementById('cvlattes');
    element.innerHTML = ''

 

}

function lancaReceita(){
    let receita = document.getElementById('cvlattes');
        

        
    
    document.getElementById('receitaatual').innerHTML = " Total de Receitas = "+somar 
   
   
    console.log(somar)
    
   

}


/*try catch

try{
  
    calculeArea(tamanhoImovel())

}catch(e){
    console.log(e)
}
console.log('Passou no teste de tamanho da embalagem')*/
