var rostro = Rostro();
var miGeneradorHtml = GeneradorHtml();

//console.log(miGeneradorHtml);

miGeneradorHtml.generacionHtmlColoresPaleta();
miGeneradorHtml.enlazarClickSobreParteSeleccionada();
miGeneradorHtml.visualizacionChangeSeccion(1);
// enlaza eventos del html 
miGeneradorHtml.enlazarEventoClickSeccion();


// cargar y genera los html 
rostro.GeneradorHtml=miGeneradorHtml;
rostro.URL_SERVIDOR="";// direccion del servidor
rostro.enlazaBtonGuardar("#guardar_avatar");


rostro.id_contenedor ="rostros";
rostro.init();
rostro.enlazaLecturaRemota();// carga los parametros y encaso consulta los datos



function cargarOtroDiv(id_elemento){
	var rostroAuxiliar = Rostro();
	rostroAuxiliar.clonarPrincipales(rostro);

	rostroAuxiliar.GeneradorHtml = miGeneradorHtml;
	rostroAuxiliar.URL_SERVIDOR = rostro.URL_SERVIDOR;// 
	rostroAuxiliar.id_contenedor = ""+id_elemento;
	rostroAuxiliar.init();

}