let acumuladoR = []
let resultadoR

let acumuladoD = []
let resultadoD

function lancaReceita(){
    let receita = document.getElementById('receita').value
        resultadoR = acumuladoR.push(receita)
        let somar = 0

        for (let i=0; i<acumuladoR.length;i++){
            somar += Number(acumuladoR[i])
        }
    
    
    document.getElementById('receitaatual').innerHTML = " Total de Receitas = "+somar 
    document.getElementById('receitalancada').innerHTML=" Lançamentos "+acumuladoR
    
    console.log(acumuladoR)
    console.log(somar)
    balance()
   

}


function lancaDespesa(){


    let despesa = document.getElementById('despesa').value
    resultadoD = acumuladoD.push(despesa)
    let somad = 0

    for (let i=0; i<acumuladoD.length;i++){
        somad += Number(acumuladoD[i])
    }
    
    //console.log(resultadoD)
    console.log(acumuladoD)
    console.log(somad)

    document.getElementById('despesaatual').innerHTML = " Total de Despesas = "+somad
    document.getElementById('despesalancada').innerHTML = " Despesas "+acumuladoD
    balance()

    
    
       
    
}

function balance(){

    let somar = 0
    let somad = 0

    for (let i=0; i<acumuladoR.length;i++){
        somar += Number(acumuladoR[i])
    }

        for (let i=0; i<acumuladoD.length;i++){
        somad += Number(acumuladoD[i])
    }

    let saldo = somar-somad
    console.log(saldo)
    document.getElementById('saldo').innerHTML = saldo

                        // Load the Visualization API and the corechart package.
                    google.charts.load('current', {'packages':['corechart']});

                    // Set a callback to run when the Google Visualization API is loaded.
                    google.charts.setOnLoadCallback(drawChart);

                    // Callback that creates and populates a data table,
                    // instantiates the pie chart, passes in the data and
                    // draws it.
                    function drawChart() {

                    // Create the data table.
                    var data = new google.visualization.DataTable();
                    data.addColumn('string', 'Topping');
                    data.addColumn('number', 'Slices');
                    data.addRows([
                        ['Receitas', somar],
                        ['Despesas', somad]
                    ]);

                    
                     var data = google.visualization.arrayToDataTable([
                        ['Lançamento: ', 'Total', { role: 'style' } ],
                        ['Receita', somar, 'stroke-color: #703593; stroke-width: 2; fill-color: #705D96; fill-opacity: 0.2'],
                        ['Despesa', somad, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 2; fill-color: #D74164; fill-opacity: 0.2']
                      ]);

                    

                    // Set chart options
                    var options = {'title':'Orçamento Familiar - Receitas x Despesas',
                                    'width':1000,
                                    'height':300};

                    // Instantiate and draw our chart, passing in some options.
                    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
                    chart.draw(data, options);
                    }

    
}





