function set(ID) {

	var httpRequest = false;
	// alert(Valeur);
	if (window.XMLHttpRequest) { // Mozilla, Safari,...
		httpRequest = new XMLHttpRequest();
		if (httpRequest.overrideMimeType) {
			httpRequest.overrideMimeType('text/xml');
			// Voir la note ci-dessous à propos de cette ligne
		}
	} else if (window.ActiveXObject) { // IE
		try {
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
			}
		}
	}

	if (!httpRequest) {
		alert('Abandon :( Impossible de créer une instance XMLHTTP');
		return false;
	}
	Patienter();

	httpRequest.onreadystatechange = function() {
		validateContents(httpRequest, ID);
	};

	var abc = (new Date()).getSeconds() + "" + (new Date()).getMinutes() + ""
			+ (new Date()).getDate();

	httpRequest.open('GET', '../validate?idForme=' + ID + "&rien=" + abc, true);

	// alert(abc);
	httpRequest.send(null);

};

function validateContents(httpRequest, ID) {

	// if (httpRequest.readyState == 2) { t=httpRequest.responseText+"";};

	if (httpRequest.readyState == 4) {

		if (httpRequest.status == 200) {

			var reponse = httpRequest.responseText;
			// alert(reponse);

			if (reponse.substr(0, 11) == "DECONNECTER") {

				location.replace("index");
			}

			else {
				if (reponse == "OK") {

					alert("Opération effectué avec succée");
					// document.reset();
					setForme(ID, "RELOAD");

				} else if (reponse == "OKCHILD") {

					alert("Opération effectué avec succée");
					// document.reset();
					setForme(ID, "ert");

				} else if (reponse == "OKRECHERCHE") {

					// alert("Opération effectué avec succée");
					// document.reset();
					setForme(ID, "RELOAD");

				}

				FinPatienter();

			}

		} else {
			alert('Un problème est survenu avec la requête. ' + httpRequest.status);

		}
	}

};

function Valider(ID, MsgC, MsgA) {

	suv = getNext();
	// alert(suv);
	if (suv != null) {
		try {
			suv.focus();
			return false;
		} catch (e) {
			alert("Il ya des champs Obligatoires non saisies");
			return false;
		}

	}

	setChamp(ID, "Valider");

	if (MsgA != "") {

		document.getElementById("MsgCharg").style.visibility = "visible";
		document.getElementById("text_charg").innerHTML = MsgA;
		timer1 = setInterval("Log()", 3000);

	}
	//setChamp(ID, "New");
	var element = document.getElementsByTagName("actualisation");

	for ( var i = 0; element[i] != null; i++) {

		var temp = element[i].id;
		var tx = element[i].x;
		// alert(temp);

		if (tx == "No")
			ActualiserTab(temp);

	}

	BarreChargement();
}

function ValiderModif(ID, MsgC, MsgA) {

	suv = getNext();
	if (suv != null) {
		try {
			suv.focus();
			return false;
		} catch (e) {
			alert("Il ya des champs Obligatoires non saisies");
			return false;
		}

	}

	setChamp(ID, "Valider");

	if (MsgA != "") {

		document.getElementById("MsgCharg").style.visibility = "visible";
		document.getElementById("text_charg").innerHTML = MsgA;
		timer1 = setInterval("Log()", 3000);

	}

	/*
	 * var element=document.getElementsByTagName("actualisation");
	 * 
	 * for (var i=0;element[i]!=null;i++){
	 * 
	 * var temp=element[i].id; var tx=element[i].x; //alert(temp);
	 * 
	 * if(tx=="No") ActualiserTab(temp); }
	 */
	BarreChargement();
}

function ValiderRechRapide(ID, MsgC, MsgA) {

	suv = getNext();
	if (suv != null) {
		try {
			suv.focus();
			return false;
		} catch (e) {
			alert("Il ya des champs Obligatoires non saisies");
			return false;
		}

	}

	setChamp(ID, "RECHRAPIDE");

	if (MsgA != "") {

		document.getElementById("MsgCharg").style.visibility = "visible";
		document.getElementById("text_charg").innerHTML = MsgA;
		timer1 = setInterval("Log()", 3000);

	}
	setChamp(ID, "New");
	var element = document.getElementsByTagName("actualisation");

	for ( var i = 0; element[i] != null; i++) {

		var temp = element[i].id;
		var tx = element[i].x;
		// alert(temp);

		if (tx == "No")
			ActualiserTab(temp);

	}
	BarreChargement();

}

function Log() {

	setChamp("Log", "");
	// alert(pourcent);

}
function BarreChargement() {

	setChamp("POURCENT", "", false);
	// alert(pourcent);
	if (pourcent < 100) {
		// alert(pourcent);
		// setInterval("BarreChargement()",500);
	} else
		clearInterval(timer);
}

function ValiderQuitter(ID, MsgC, MsgA) {

	suv = getNext();
	if (suv != null) {
		try {
			suv.focus();
			return false;
		} catch (e) {
			alert("Il ya des champs Obligatoires non saisies");
			return false;
		}
	}

	if (MsgA != "") {
		document.getElementById("MsgCharg").style.visibility = "visible";
		document.getElementById("text_charg").innerHTML = MsgA;
		timer1 = setInterval("Log()", 3000);
	}
	setChamp(ID, "Valider", false);

	Quitter(ID);

	var element = document.getElementsByTagName("actualisation");

	for ( var i = 0; element[i] != null; i++) {

		var temp = element[i].id;
		var tx = element[i].x;
		// alert(temp);

		if (tx == "No")
			ActualiserTab(temp, "");

	}

};

function Annuler(ID, x, y, IDTHIS) {

	if (window.confirm("Voulez vous annuler la saisie?")) {
		setChamp(ID, "New");
	}

};

function Edition(ID, x, y, IDTHIS) {

	suv = getNext();
	if (suv != null) {
		try {
			suv.focus();
			return false;
		} catch (e) {
			alert("Il ya des champs Obligatoires non saisies");
			return false;
		}
	}
	setChamp(ID, "Edition");

};

function Accueil(ID, x, y, IDTHIS) {

	setChamp("Accueil", "");
};

function Quitter(ID, MsgC, MsgA, IDTHIS) {



			setChamp(ID, "Quitter", false);
	
};

function ConfirmButton(msgc, id, autre, vaction , onModif) {
	ID=id.substring(0,id.length-2)
	
	if( onModif == 'Oui'){
	if ((msgc != '') && modifier ) {
		if (window.confirm(msgc)) {
			
			setChamp(id, autre);
			
		} else {
			
			if (vaction == "Suivant") {
				
				nextRow(ID);

			}
			if (vaction == "Precedent") {
				precedentRow(ID);
				
 
			}
		}
	} else {
		//alert("next")
		if (vaction == "Suivant") {
			
			nextRow(ID);

		}else
		if (vaction == "Precedent") {
			precedentRow(ID);
			

		}else{
			
			if((vaction == "ValiderModif")&&(!modifier))
				alert("Aucune modification à valider")
				else
			  setChamp(id, autre);
		}
	}
	}else{
		if(msgc != ''){
			if (window.confirm(msgc)) {
			
			setChamp(id, autre);
			}
		}
		else
			setChamp(id, autre);
	}

}
