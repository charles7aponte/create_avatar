var rostro = Rostro();
var miGeneradorHtml = GeneradorHtml();

console.log(miGeneradorHtml);

miGeneradorHtml.generacionHtmlColoresPaleta();
miGeneradorHtml.enlazarClickSobreParteSeleccionada();
miGeneradorHtml.visualizacionChangeSeccion(1);
// enlaza eventos del html 
miGeneradorHtml.enlazarEventoClickSeccion();


// cargar y genera los html 
rostro.GeneradorHtml=miGeneradorHtml;



rostro.id_contenedor ="rostro";
rostro.init();


