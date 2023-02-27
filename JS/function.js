
    //Boton para el "Modo Oscuro"
document.getElementById('modoOscuro').addEventListener('click',function() {
    document.body.style.backgroundColor = 'rgba(191, 183, 183, 0.611)';
})

    //Boton para "Modo Claro"
document.getElementById('modoClaro').addEventListener('click',function() {
    document.body.style.backgroundColor = '#ffffff';
})

document.getElementById('modoOscuro').addEventListener('click',function() {
    document.getElementById('modoOscuro').style.display="none";
    document.getElementById('modoClaro').style.display="block";
})
    //Combinamos la funcion de mostrar y ocultar
document.getElementById('modoClaro').addEventListener('click',function() {
    document.getElementById('modoClaro').style.display="none";
    document.getElementById('modoOscuro').style.display="block";
})



    //Funcion para copiar texto con nuestro boton
function copiar() {
    var textoacopiar = document.getElementById("telefono").innerText;
    navigator.clipboard.writeText(textoacopiar);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }


  // Cada vez que dejemos de hacer hover en el tooltip, este cambiará su mensaje al indicado en la funcion
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar!";
  }
