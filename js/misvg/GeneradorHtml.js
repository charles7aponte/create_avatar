function GeneradorHtml (){
	return{
		
		 posicionSeccion:1
		 ,posicionSeleccionNombre:null
		,id_panelColores:"panel_colores"

		// colores
		,colores:[
				//verde oscuro
				["#008C85",
				"#00B7AE"
				]

				,["#92C020",
				"#CEFF2D"
				],

			]

		/*******
		* 
		*/
		,imgSVG:function(src){
			var html="<img src='"+src+"' alt=''>";
			return html;
		} 



		/********
		****  generacion de elementos de colores 
		****  
		@param mi_color string hexadecimal .. 
		****  
		*/
		,generacionHtmlColorCirculo:function(mi_color,i)
		{

			 return "<div class='mis_colores' data-posicion_color='"+i+"' style='background-color:"+mi_color+"'></div>";

		}// fin funcion generacionHtmlColorCirculo




		/************
		** genera todos los circuloas de la paleta de colores 
		*/
		,generacionHtmlColoresPaleta:function(){

			var _seft= this;
			var html = "";

			html+=""+_seft.generacionHtmlColorCirculo("rgba(252, 204, 161, 0) ",-1);

			for (var i = 0; i < _seft.colores.length; i++) {
				html+=""+_seft.generacionHtmlColorCirculo(_seft.colores[i][0],i);
			};


			$("#"+_seft.id_panelColores).html(html);

			
		}// generacion todos 

		,enlazarClickSobreParteSeleccionada:function(){

			var _seft=this;
/*
			$(".parte").click(function(){
				var div = $(this);

				_seft.elementoSeleccionado(div.attr("data-accion"),div.attr("data-posicion"));
			});*/
		}// fin function enlazarEventoClickSeccion



		/******
		** resalta los elemento seleccianaods
		*/
		,elementoSeleccionado:function(accion, posicion){

			var $elemento  = $("[data-accion="+accion+"][data-posicion="+posicion+"]");

			if($elemento)
			{
				var anterior = $elemento.parent().find(".parte_activo");
				anterior.removeClass("parte_activo");

				$elemento.addClass("parte_activo");
			}


		}// fin elementoSeleccionado



		/********
		** crea los eventos del paginado de elementos como lo son cabello ,...
		*/
		,enlazarEventoClickSeccion:function(){
			var _seft=this;
			
			$("[data-sep]").click(function(){

				var $elemento =$(this);
				var numero =$elemento.attr("data-sep");
				_seft.visualizacionChangeSeccion(numero);
			});
		}// fin function enlazarEventoClickSeccion



		/*********
		** segun el numero de seccion resibida resalta el bton y muestra los elemento
		@param numero number del numero de la seccion 1,2,3.. 
		*/
		,visualizacionChangeSeccion:function(numero){

			var _seft=this;
			var nombre="";
			// muestra los elementos para seleccion segun la seccion 
			$("[data-seccion]").hide();
			$("[data-seccion='"+numero+"']").show();
			console.log("[data-seccion='"+numero+"']");

			//muestra activo o desactivado el boton
			$(".bton_activo").removeClass("bton_activo");
			$("[data-sep='"+numero+"']").addClass("bton_activo");
			console.log("...[data-sep='"+numero+"']");

			_seft.posicionSeccion= numero;


			switch(numero+"")
			{
				case "1":
					nombre="forma";
				break;

				case "2":
					nombre="ojos";
				break;


				case "3":
					nombre="ceja";
				break;



				case "4":
					nombre="nariz";
				break;


				case "5":
					nombre="boca";
				break;


				case "6":
					nombre="oreja";
				break;

				case "7":
					nombre="cabello";
				break;


				case "8":
					nombre="barba";
				break;

			}

		
			_seft.posicionSeleccionNombre=nombre;

		}// fin function visualizacionChangeSeccion
	};
}