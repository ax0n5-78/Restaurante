persas = document.getElementById('perai')
amanhc = []

function onePie(){
    doisP  = document.getElementById('eita').value
    passo  = Number(document.getElementById('carca').value)
    heheBoy  = Number(document.getElementById('kkkk').value)
    
    mortalKombat = {
        fodd: doisP,
        ferreir: passo,
        coringand: heheBoy
    }

    amanhc.push(mortalKombat)

    nao = ''
    for(w=0; w<amanhc.length; w++){
        nao += '<div>'+amanhc[w].fodd+', '+amanhc[w].ferreir+', '+amanhc[w].coringand+'</div>'
    }
    
    persas.innerHTML = nao 

    document.getElementById('eita').value = ''
    document.getElementById('carca').value = ''
    document.getElementById('kkkk').value = ''
}