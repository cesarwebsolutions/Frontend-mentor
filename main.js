

var visibilidade = true
var negrito = visibilidade

function ocultarExibir(id){
    
    if(visibilidade){
        document.getElementById(id).style.display = "none";
        visibilidade = false
    } else {
        document.getElementById(id).style.display = "block";
        visibilidade = true
        if(negrito = true){
        document.getElementById('1').style.color = "red";
        }
    }

}





