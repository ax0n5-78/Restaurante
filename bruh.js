persas = document.getElementById('perai')
amanhc = []

function onePie(){
    doisP  = document.getElementById('eita').value
    passo  = Number(document.getElementById('carca').value)
    heheBoy  = Number(document.getElementById('kkkk').value)

    if(!(doisP, passo, heheBoy == '')){
        mortalKombat = {
            fodd: doisP,
            ferreir: passo,
            coringand: heheBoy
        }
    
        amanhc.push(mortalKombat)
    }

    nao = ''
    for(w=0; w<amanhc.length; w++){
        nao += '<div id="miodiso'+w+'">Comida: '+amanhc[w].fodd+
        '<br>Número de pessoas: '+amanhc[w].ferreir+'<br>Número da mesa: '+amanhc[w].coringand+
        '<br><button onclick="odioge('+w+')">Del haha</button></div>'
    }
    
    persas.innerHTML = nao 

    document.getElementById('eita').value = ''
    document.getElementById('carca').value = ''
    document.getElementById('kkkk').value = ''
}

function odioge(w){
    alert('Bruh, tu quer deletar a mesa '+amanhc[w].coringand)
}
