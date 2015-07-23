function Rostro(){

 return {
//variables
	contenedor:'null'

  ,tipoRostro: 1 // 1 es modo edicion , 2 , modo muestra ... solo muestra
  ,URL_SERVIDOR:""
  ,id_res_actualizar:null

	,id_contenedor:'null'
	,mi_cuerpo_svg:null
	,mi_forma_svg:null
	,mi_oreja_svg:null
	,mi_ceja_svg:null
	,mi_ojos_svg:null
	,mi_nariz_svg:null
	,mi_boca_svg:null
	,mi_cabello_svg:null
	,mi_nariz_svg:null
	,mi_barba_svg:null
	,mi_expresion_svg:null
	,GeneradorHtml:null

	// datos seleccionados 
	,datos:{
		 'forma':'n1'
		,'oreja':'n1'
		,'ceja':'n1'
		,'ojos':'n1'
		,'nariz':'n1'
		,'boca':'n1'
		,'cabello':'n1'	
		,'barba':'n1'
		,'expresion':'n1'

	    ,'forma_1':'cargar'
		,'oreja_1':'cargar'
		,'ceja_1':'cargar'
		,'ojos_1':'cargar'
		,'nariz_1':'cargar'
		,'boca_1':'cargar'
		,'cabello_1':'cargar'
		,'barba_1':'cargar'
		,'expresion_1':'cargar'
	}

	// posicion de los colores
	,color_forma_svg_i:null
	,color_ceja_svg_i:null
	,color_ojos_svg_i:null
	,color_cabello_svg_i:null
	,color_boca_svg_i:null
	//,color_barba_svg_i:null



  /*******
  ** clonar datos principales para la reulizacion 
  */
  ,clonarPrincipales:function(Rostro)
  {
    var _seft= this;

    _seft.datos = Rostro.datos;
    _seft.color_forma_svg_i=Rostro.color_forma_svg_i;
    _seft.color_ceja_svg_i=Rostro.color_ceja_svg_i;
    _seft.color_ojos_svg_i=Rostro.color_ojos_svg_i;
    _seft.color_cabello_svg_i=Rostro.color_cabello_svg_i;
    _seft.color_boca_svg_i=Rostro.color_boca_svg_i;

  }// fin clonarPrincipales







/// funciones

    ,generacionSVG:function(){
        
         var _seft=this;

         var html=' <svg version="1.1" id="_svg_'+_seft.id_contenedor+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="211px" height="228.77px" viewBox="0 0 211 228.77" enable-background="new 0 0 211 228.77" xml:space="preserve"> '
         +'           <g class="mi_cuerpo"></g> '
         +'           <g class="mi_forma"></g> '
         +'           <g class="mi_expresion"></g>    '
         +'           <g class="mi_oreja"></g> '
         +'           <g class="mi_ojos"></g> '
         +'           <g class="mi_ceja"></g> '
         +'           <g class="mi_boca"></g> '
         +'           <g class="mi_barba"></g> '
         +'           <g class="mi_nariz"></g> '
         +'           <g class="mi_cabello"></g>  '                    
                   
         +'       </svg> ';


         return html;

    }// fin generacionSVG


  	,init:function()
  	{
  		
      var _seft= this;

     var html= _seft.generacionSVG();

     $("#"+_seft.id_contenedor).html(html);

    	_seft.contenedor = Snap("#_svg_"+_seft.id_contenedor);
  		_seft.contenedor.attr({height: '100%',
    			width: '100%'});
  		_seft.mi_cuerpo_svg = _seft.contenedor.select(".mi_cuerpo");
  		_seft.mi_forma_svg = _seft.contenedor.select(".mi_forma");
  		_seft.mi_oreja_svg = _seft.contenedor.select(".mi_oreja");
  		_seft.mi_ceja_svg = _seft.contenedor.select(".mi_ceja");
  		_seft.mi_ojos_svg = _seft.contenedor.select(".mi_ojos");
  		_seft.mi_boca_svg = _seft.contenedor.select(".mi_boca");
  		_seft.mi_cabello_svg = _seft.contenedor.select(".mi_cabello");

  		_seft.mi_nariz_svg = _seft.contenedor.select(".mi_nariz");
  		_seft.mi_barba_svg = _seft.contenedor.select(".mi_barba");
  		_seft.mi_expresion_svg = _seft.contenedor.select(".mi_expresion");



  		_seft.cargaSVGSeleccionado("cuerpo","c1","cargar");		
  	
  		_seft.cargaDatosAvatar();

      if(_seft.tipoRostro==1)
      {
    		_seft.generacionImg();
    		_seft.enlazarEventosEstilos();
    		_seft.enlazaCambioColor();  		
      	
      }

    }//fin de init








  	/******
  	** carga los datos del avatar 
  	**/
  	,cargaDatosAvatar:function(){
  		var _seft= this;


    _seft.cargaSVGSeleccionado("expresion","n1","cargar");   		
		_seft.cargaSVGSeleccionado("oreja",_seft.datos.oreja, _seft.datos.oreja_1);
		_seft.cargaSVGSeleccionado("ceja",_seft.datos.ceja, _seft.datos.ceja_1);
		_seft.cargaSVGSeleccionado("ojos",_seft.datos.ojos, _seft.datos.ojos_1);
		_seft.cargaSVGSeleccionado("nariz",_seft.datos.nariz, _seft.datos.nariz_1);
		_seft.cargaSVGSeleccionado("boca",_seft.datos.boca, _seft.datos.boca_1);
		_seft.cargaSVGSeleccionado("cabello",_seft.datos.cabello, _seft.datos.cabello_1);
		_seft.cargaSVGSeleccionado("barba",_seft.datos.barba, _seft.datos.barba_1);
		_seft.cargaSVGSeleccionado("forma",_seft.datos.forma, _seft.datos.forma_1);
  	
    }


  	/*********
  	** cambiar el color de el  elemento 
  	@param int posicion de  color hexadecimal
  	**/
  	,cambiarColorElemento:function(posicion_color){
  		var _seft=this;


  		_seft.guardaElColor(posicion_color, _seft.GeneradorHtml.posicionSeleccionNombre);
  		_seft.cargaDatosAvatar();


  	}// fin funciotn cambiarColorElemento


  	/****
  	* enlaza al circulos de cambio de colores
  	**/
  	,enlazaCambioColor:function(){
  		var _seft=this;
  		$(".mis_colores").click(function(){

  			var posicion = $(this).attr("data-posicion_color");
  			_seft.cambiarColorElemento(posicion);
  		});

  	}// enlazaCambioColor



  	/*****
  	** guarda la posicion del colore segun la eelccion del elemento
  	@param int posicion de  color hexadecimal
  	@param string tipo
  	***/
  	,guardaElColor:function(posicion_color, tipo){
  		var _seft= this;

  		console.log(" guarda color "+posicion_color +" - "+tipo);

  		if(posicion_color<0)
  			{
  				posicion_color=null;
  			}

  		switch(tipo)
  		{
  			// forma, nariz, oreja
  			case "forma":
  			case "nariz":
  			case "oreja":
  				_seft.color_forma_svg_i = posicion_color;
  			break;

  			//ojos
  			case "ojos":
  				_seft.color_ojos_svg_i = posicion_color;
  			break;

  			//cejas , cabello, barba
  			case "ceja":
  			case "cabello":
  			case "barba":
  				_seft.color_cabello_svg_i = posicion_color;
  			break;

  			//boca
  			case "boca":
  				_seft.color_boca_svg_i = posicion_color;
  			break;


  		}

  		 console.log(" forma "+_seft.color_forma_svg_i  );
  		 console.log(" ojos "+_seft.color_ojos_svg_i  );
  		 console.log(" cabello "+_seft.color_cabello_svg_i  );
  		 console.log(" cabello "+_seft.color_boca_svg_i  );

  		return null;

  	}// fin function cambioColor



	/*****
  	** retorna el objeto hexadecimal guardado
  	@param Array color hexadecimal
  	@param string tipo de seccion 
  	***/
  	,getElColor:function( tipo ){
  		var _seft= this;

  		switch(tipo)
  		{
  			// forma, nariz, oreja
  			case "forma":
  			case "nariz":
  			case "oreja":
        case "expresion":
  			
  				if(_seft.color_forma_svg_i)
  					return  _seft.GeneradorHtml.colores[_seft.color_forma_svg_i] ;

  			break;

  			//ojos
  			case "ojos":
  				if(_seft.color_ojos_svg_i)
  					return _seft.GeneradorHtml.colores[_seft.color_ojos_svg_i];
  			break;

  			//cejas , cabello, barba
  			case "ceja":
  			case "cabello":
  			case "barba":

  				if(_seft.color_cabello_svg_i)
  					return _seft.GeneradorHtml.colores[_seft.color_cabello_svg_i];
  			break;



			case "boca":
  				if(_seft.color_boca_svg_i)
  					return _seft.GeneradorHtml.colores[_seft.color_boca_svg_i];
  			break;
  			

  		}

  		return null;
  	}// fin function getElColor



	/**
  	* direccion de carpeta segun el tipo
  	@param tipo string tipo de imagne svg mi_cabello
  		cuerpo
		forma
		oreja
		ceja
		ojos
		boca
		cabello
		nariz
		barba
  	*/
  	, urlRelativo:function(tipo)
  	{
      var _seft= this;
  		return   _seft.URL_SERVIDOR+"img/svg/"+tipo+"/";
 
  	}// fin urlRelativo



  	/**
  	* inicializacion de eventos para cambiar elementos ,, enlazandolo con le html
  	*/
  	,enlazarEventosEstilos: function(){

  		var _seft=this;


  		$(".parte").click(function(){
  			var $div = $(this);
            var tipo= $div.attr("data-accion");
            var posicion= $div.attr("data-posicion");
            var cargar= $div.attr("data-click");

            _seft.cargaSVGSeleccionado(tipo,posicion,cargar);
            
  		});//fin funcion anonima click

  	}// enlazarEventosEstilos




   /*******
   ** guarda los datos de la capas puede ser n1, n2,n3, eliminar 
   **
	@param accion string ceja,forma, ojos
	@param click string eliminar,cargar
	@param valor string el valor de la poscion n1,n2,n3..nm , eliminar
   */
   ,guardaDatosCapas:function(accion,click,valor){
   		var _seft= this;
   		switch(accion)
   		{
   			case "forma":
   				_seft.datos.forma = valor;
   				_seft.datos.forma_1 = click;
   			break;

   			case "barba":
   				_seft.datos.barba= valor;
   				_seft.datos.barba_1 = click;
   			break;


   			case "boca":
   				_seft.datos.boca = valor;
   				_seft.datos.boca_1 = click;
   			break;


   			case "cabello":
   				_seft.datos.cabello = valor;
   				_seft.datos.cabello_1= click;
   			break;



   			case "ceja":
   				_seft.datos.ceja = valor;
   				_seft.datos.ceja_1 = click;
   			break;


   			case "expresion":
   				_seft.datos.expresion = valor;
   				_seft.datos.expresion_1 = click;
   			break;

   			case "nariz":
   				_seft.datos.nariz = valor;
   				_seft.datos.nariz_1 = click;
   			break;


   			case "ojos":
   				_seft.datos.ojos = valor;
   				_seft.datos.ojos_1 = click;
   			break;


   			case "oreja":
   				_seft.datos.oreja = valor;
   				_seft.datos.oreja_1 = click;
   			break;
   		}

   }// guardaDatosCapas





  	/*************
  	* carga el svg seleccionado por el usuario
  	*@param tipo string tipo de capa de parte del rostro svg
  		cuerpo,forma,oreja,ceja,ojos,boca,cabello,nariz,barba,	
  	@param posicion el numero del elemento o nombre del archivo n1, n2 ... .nm
  	@parma evento string evento que debe realizar ..  
  		"cargar"=> carga un svg
  		"eliminar"=> elimina la capa dejandola vacia 
  	*/
  	,cargaSVGSeleccionado:function(tipo, posicion, evento){
		var _seft=this;
		if(posicion=="" || posicion==null || tipo =="" || tipo==null )
            {
            	//console.error("posicion "+posicion +" -- > tipo " +tipo);
            	return false;
            }

        //guarda los datos de las capas  
        _seft.guardaDatosCapas(tipo,evento,posicion);

        
        // resalta la seleccion
        _seft.GeneradorHtml.elementoSeleccionado(tipo, posicion);


  
  		console.log("cargando .. "+_seft.urlRelativo(tipo)+posicion+".svg");

  		//carga elemento  svg	
  		if(evento=="cargar")
  		{
  			Snap.load(_seft.urlRelativo(tipo)+posicion+".svg", function (f) {
			   var g = f.select("g");
			   var espacioSVGg=null;

			   espacioSVGg= _seft.getCapaSvg(tipo)

			   if(espacioSVGg)
			   {
			   		var anteriorG= espacioSVGg.select("g");
				   	if(anteriorG)
				   	{
				   		anteriorG.remove();
				   	}

				   	// colores para cambiar 
				   	var color_seleccionado = _seft.getElColor(tipo);

				   console.info("color seleccionado "+color_seleccionado+" -- "+tipo);
				   	if(color_seleccionado)
				   	{
				   		for (var i = 0; i < color_seleccionado.length; i++) {
				   		var imag =f.selectAll("[imag='"+(i)+"']");
				   		console.info(imag);
					   	 if(imag)
					   	 	{
					   	 		console.log("...color en img"+i);
					   	 		imag.attr({fill: color_seleccionado[i]+""});
					   	 	}
				   		};	
				   	}// fin if color_seleccionado
				   	

				   	 
				    espacioSVGg.append(g);

			   }
			   else{
			   	console.error("No existe el tipo seleccionado");
			   }

		   
		  
			});// fin load de svg	
  		}

  		else if(evento=="eliminar")
  		{
  			  var espacioSVGg=null;

			   espacioSVGg= _seft.getCapaSvg(tipo)

			   if(espacioSVGg)
			   {

			   	var anteriorG= espacioSVGg.select("g");
				   	if(anteriorG)
				   	{
				   		anteriorG.remove();
				   	}
			   }

  		}
  		 
		return false;

  	}// fin function cargaSVGSeleccionado

  	

  	/**********
  	* retonrna la variable o atributo global encargado de manejo de la capa del svg 
  	@param tipo string tipo de capa del svg del rostro, en caso de no existir retorn null
  	*/
  	,getCapaSvg:function(tipo){
  		var _seft=this;
  		var espacioSVGg=null;
  							   // se escoge un espacio del svg segun el caso seleccionado
					   switch(tipo)
					   {
					   	case "cuerpo": 
					   			espacioSVGg=_seft.mi_cuerpo_svg;
					   		break;

						case "forma": 
							     espacioSVGg=_seft.mi_forma_svg;
							break;

						case "oreja": 
								espacioSVGg=_seft.mi_oreja_svg;
							break;

						case "ceja": 
								espacioSVGg=_seft.mi_ceja_svg;

							break;

						case "ojos": 
								espacioSVGg=_seft.mi_ojos_svg;

							break;

						case "boca": 
								espacioSVGg=_seft.mi_boca_svg;

							break;

						case "cabello": 
								espacioSVGg=_seft.mi_cabello_svg;

							break;

						case "nariz": 
								espacioSVGg=_seft.mi_nariz_svg;

							break;

						case "barba": 
								espacioSVGg=_seft.mi_barba_svg;
							break;

						case "expresion": 
								espacioSVGg=_seft.mi_expresion_svg;
							break;	

					   }//fin switch

			return espacioSVGg;

  	}//fin function getCapaSvg



    /********
    ** inicia la lectura de datos por parametro , y carga los datos remotos
     ***/
     ,enlazaLecturaRemota:function(){

        var _seft=this;
        setTimeout(function(){
          
          var parametros= _seft.getGET();
          try{
            _seft.id_res_actualizar =parametros["nid"];
          } catch(e){

          }

          if(_seft.id_res_actualizar)
          {
            _seft.leerRemotaJson();

          }

        },500);

     }// enlazaLecturaRemota



    ,getGET:function(){
          var url= location.search.replace("?", "");
          var arrUrl = url.split("&");
          var urlObj={};   
          for(var i=0; i<arrUrl.length; i++){
              var x= arrUrl[i].split("=");
              urlObj[x[0]]=x[1]
          }
          return urlObj;
      }



  	/***************
  	* genera los img para visualizar los iconos de las persona
  	**/
  	,generacionImg:function(){
  		var listaElementos=$(".parte");
  		var _seft=this;

  		for (var i = 0; i < listaElementos.length; i++) {
  			
  			var $div = $(listaElementos[i]);
            var tipo= $div.attr("data-accion");
            var posicion= $div.attr("data-posicion");
            var cargar= $div.attr("data-click");

            console.info(_seft.GeneradorHtml);
  			$div.html(_seft.GeneradorHtml.imgSVG(_seft.urlRelativo(tipo)+posicion+".png"))
  			
  		};

  	}// fin function generacionImg




    /**************
    * guarda los datos .. 
    *
    ****/
    ,guardaFormaRemota:function(){
      var _seft=this;

      $.ajax({
        method: "POST",
        dataType:'json',
        url: _seft.URL_SERVIDOR+"servicios/guardar.php",
        data:{
          nid:_seft.id_res_actualizar,
          text:_seft.getStringData()

        },
        // resulto todo bien
        success:function(data){
          if(data && data.respuesta)
          {
            if(data.id)
            {
              _seft.id_res_actualizar= data.id;
            }
            alert("se guardado");

          }
          else {
            alert("Ohh!! paso algo");
          }
        }
        ,error:function(){
          alert("Error en el servidor");
        }



      });

    }// fin function guardaFormaRemota

    /*******
    *** crear el string de guardado
    ******/
    ,getStringData:function(){

      var _seft= this;
    
    var mistring="";  
    mistring="{" 
    +"  datos:{"
    +" 'forma':'"+_seft.datos.forma+"'"
    +",'oreja':'"+_seft.datos.oreja+"'"
    +",'ceja':'"+_seft.datos.ceja+"'"
    +" ,'ojos':'"+_seft.datos.ojos+"'"
    +",'nariz':'"+_seft.datos.nariz+"'"
    +",'boca':'"+_seft.datos.boca+"'"
    +",'cabello':'"+_seft.datos.cabello+"'"
    
    +" ,'barba':'"+_seft.datos.barba+"'"
    +",'expresion':'"+_seft.datos.expresion+"'"

    +"  ,'forma_1':'"+_seft.datos.forma_1+"'"
    +",'oreja_1':'"+_seft.datos.oreja_1+"'"
    +",'ceja_1':'"+_seft.datos.ceja_1+"'"
    +",'ojos_1':'"+_seft.datos.ojos_1+"'"
    +" ,'nariz_1':'"+_seft.datos.nariz_1+"'"
    +" ,'boca_1':'"+_seft.datos.boca_1+"'"
    +" ,'cabello_1':'"+_seft.datos.cabello_1+"'"
    
    +" ,'barba_1':'"+_seft.datos.barba_1+"'"
    +" ,'expresion_1':'"+_seft.datos.expresion_1+"'"
    +" }"


      +",color:{"
      +"color_forma_svg_i:"+_seft.color_forma_svg_i+""
      +",color_ceja_svg_i:"+_seft.color_ceja_svg_i+""
      +",color_ojos_svg_i:"+_seft.color_ojos_svg_i+""
      +",color_cabello_svg_i:"+_seft.color_cabello_svg_i+""
      +",color_boca_svg_i:"+_seft.color_boca_svg_i+""
      +"}"
    +"}";

    var gato=null;
     eval("gato="+mistring);
     console.log(gato);
    return mistring;
    }// fin getStringData



    /*********
    ** enlaza html con el boton de guardad
    ***/
    ,enlazaBtonGuardar:function(id_boton){

      var _seft=this;
      $(id_boton).click(function(){
           _seft.guardaFormaRemota();
      });
         
    }// fin function enlazaBtonGuardar



    /**********
    *** leer los datos si esta 
    ***
    ***/
    ,leerRemotaJson:function(){
      var _seft=this;

        $.ajax({
           method: "POST",
          dataType:'json',
          url: _seft.URL_SERVIDOR+"servicios/cargar.php",
          data:{
            nid:_seft.id_res_actualizar
          }
           
          ,success:function(data){
            if(data)
            {
                _seft.tomaStrignCarga(data.datos);

            }
            else {
              alert("el servidor envio mal los datos");
            }

          }
          ,error:function(){
            alert("error en la conexion");

          }
        });




    }// leerRemotaJson




    /**********
    ** toma el string y lo combierte 
    **
    ***/
    ,tomaStrignCarga:function(mi_string)
    {
      var datos= null;
      var _seft=this;
      
      try
      {
        eval("datos="+mi_string);
      }
      catch(e)
      {
        alert("el text de string esta mal!");
      }

      
      if(datos)
      {
        _seft.datos = datos.datos;

        _seft.color_forma_svg_i=""+datos.color.color_forma_svg_i;
        _seft.color_ceja_svg_i=""+datos.color.color_ceja_svg_i;
        _seft.color_ojos_svg_i=""+datos.color.color_ojos_svg_i;
        _seft.color_cabello_svg_i=""+datos.color.color_cabello_svg_i;
        _seft.color_boca_svg_i=""+datos.color.color_boca_svg_i;


        _seft.cargaDatosAvatar(); 
      }

    }// fin function tomaStrignCarga

  };
};