/************************************************************************	
*	VALIDA SI LA ESTRUCTURA DE LA CEDULA ES VALIDA.
* 
* 	LA CEDULA SE COMPONE DE 14 CARACTERES, DONDE EL ULTIMO ES UNA LETRA.
* 	PARA LA VALIDACION SE DEBE CALCULAR EL MODULO 23 DE LA PARTE NUMERICA DE
* 	LA CEDULA, Y CON EL RESIDUO SE DETERMINA EL NUMERO DE LETRA QUE DEBE LLEVAR 
* 	AL FINAL.
*************************************************************************/


function fnValidaCedula(cedulaa) {
	try {
		if ( validaCedula(cedulaa) )
			alert("LAA CEDULA ES VALIDA");
		 else
		 	alert("La cedula ingresada no es valida");
	} catch (err) {
		console.log(err);
		alert(err);
	}
}


function validaCedula(lsCedula) {

	var lbCedulaOK = false;

	try { 
		console.log("parametro: " + lsCedula);
		if (lsCedula.length != 14)
			throw ("La longitud de la cédula no es de 14 dígitos.");

		var lAsConstantes = new Array("A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M","N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"),
			lsCaracterRes = "",
			lsCedulaValidada = "";
		//*** EL ULTIMO DIGITO ES UNA LETRA. Y SE LE QUITA PARA VALIDAR.
		liNumCedula = lsCedula.substring(0, 13),
		liResiduo = liNumCedula % 23;

		lsCaracterRes = lAsConstantes[liResiduo];
		lsCedulaValidada = rellenaCadena(liNumCedula, "0", 13, true) + lsCaracterRes;

		if (lsCedula == lsCedulaValidada)
			lbCedulaOK = true;

	}catch (err) { 
		console.log(err);
		if (typeof (err.description) == "string")
			alert(err.description);
		else
			throw err;
	}
	console.log("validacion: La cedula es: " + lbCedulaOK);
	return lbCedulaOK;

}




	/************************************************************************	
	*	RELLEAN UNA CADENA CON EL NUMERO DE CARACTERES ESPECIFICADOS.
	*************************************************************************/
	function rellenaCadena(lsDato, lsCaracter, liLongitud, lbIzquierda)	{
		
		var	lsCadena = "",
			lsTramaIncremento = "",
			liIncremento = liLongitud - lsDato.length;
		
		for (var i=0; i<liIncremento; i++)
			lsTramaIncremento += lsCaracter;
		
		lsCadena = lbIzquierda ? (lsTramaIncremento + lsDato) : (lsDato + lsTramaIncremento);
		
		return lsCadena;
	}
	