function Rostro(){

 return {
//variables
	contenedor:'null'
	,id_contenedor:'null'


/// funciones
  	,init:function()
  	{
  		var _seft= this;
  		_seft.contenedor = Snap("#"+_seft.id_contenedor);
  		_seft.contenedor.attr({height: '100%',
  width: '100%'});

  		Snap.load("img/svg/cuerpo/c1.svg", function (f) {
		    // Note that we traversre and change attr before SVG
		    // is even added to the page
		    // f.select("polygon[fill='#09B39C']").attr({fill: "#bada55"});
		    var g = f;//.select("g");
		    _seft.contenedor.append(g);
		    // Making croc draggable. Go ahead drag it around!
		    //g.drag();
		    // Obviously drag could take event handlers too
		    // Looks like our croc is made from more than one polygon...
		});
  	}//fin de init


  };
};