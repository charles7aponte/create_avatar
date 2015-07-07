<?php
require_once("config.php");

$nid=null;
$cant=0;

if(isset($_POST['nid']))
{
	$nid = stripslashes(strip_tags($_POST['nid']));

}

$text = stripslashes(strip_tags($_POST['text']));


if($nid)
{

	$sql = "SELECT nid FROM avatar_img WHERE nid = $nid";
	$resultado = mysql_query($sql);
	$datos = array('respuesta'=>false);
	$cant = mysql_num_rows($resultado);

}

if($cant>0){
	$sql = "UPDATE avatar_img SET datos = \"$text\" WHERE nid = $nid;";
	$resultado = mysql_query($sql);
	$datos['respuesta']=true;	
	$datos['id']=$nid;


	
	
}else{
	//$sql = "INSERT INTO avatar_img (nid, datos) VALUES($nid, \"$text\");";

	$sql = "INSERT INTO avatar_img ( datos) VALUES( \"$text\");";


	$resultado = mysql_query($sql);
	$nid=mysql_insert_id();
	

	$datos['respuesta']=true;
	$datos['id']=$nid;

}

echo json_encode($datos);