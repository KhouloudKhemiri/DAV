var WaitFor = new Array();;
var cptWait = -1;
var Vwait = false;
var pourcent = 100;
var timer;
var timer1;
var ElementErreur = null;
var modifier = false;
function ajoutWait(ptr) {

	cptWait++;
	WaitFor[cptWait] = ptr;

};

function getWait() {

	if (WaitFor.length >= 1)
		var ptr = WaitFor[0];

	if (cptWait < 0) {
		document.getElementById("MsgCharg").style.visibility = "hidden";
		document.getElementById("text_charg").innerHTML = "";
		// alert("Fin ");

		return null;
	}
	for ( var i = 0; i < WaitFor.length; i++)
		WaitFor[i] = WaitFor[i + 1];

	WaitFor[WaitFor.length] = null;

	cptWait--;

	return ptr;

};

function setChamp(ID, Value, isNotAsyn) {

	if ((Vwait) && (ID != "POURCENT") && (ID != "Log")) {

		ajoutWait('setChamp("' + ID + '","' + Value + '",' + isNotAsyn + ')');

	} else {
		var ByWait = false;

		if ((ID != "POURCENT") && (ID != "Log")) {
			Vwait = true;

		} else
			ByWait = true;

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

		httpRequest.onreadystatechange = function() {
			setChampContents(httpRequest, ByWait);
		};

		var abc = (new Date()).getSeconds() + "" + (new Date()).getMinutes()
				+ "" + (new Date()).getHours();
		// alert(abc);
		// alert(ID+" "+Value+"");
		Block('body');

		/*
		 * if(isNotAsyn==null){ isNotAsyn=true;
		 *  }
		 * 
		 * if(!isNotAsyn){
		 * 
		 * Vwait=true;
		 *  }
		 */
		// alert(Value);
		Value = Value.replace('+', 'PLUSPOF');
		while (Value.indexOf("%") >= 0)
			Value = Value.replace('%', '~');

		while (Value.indexOf("~") >= 0)
			Value = Value.replace('~', '%25');

		// alert(Value);
		httpRequest.open('GET', '../setchamp?idChamp=' + ID + "&Valeur="
				+ Value + "&rien=" + abc, true);
				
				

		httpRequest.send(null);
	}
};

function setChampContents(httpRequest, ByWait) {

	if (httpRequest.readyState == 4) {

		if (httpRequest.status == 200) {

			var reponse = httpRequest.responseText;
			// alert(reponse);

			if (reponse.substr(0, 11) == "DECONNECTER") {
				show_warning = false;
				location.replace("index");
			}

			else { // alert(reponse);
				updateData(reponse);

				DeBlock('body');

				if (!ByWait)
					Vwait = false;

				var ptr = getWait();

				if (ptr != null) {
					// alert(ptr);

					eval(ptr);

				}

			}

		} else {
			alert('Un problème est survenu avec la requête. ' + httpRequest.statusText+" "+ httpRequest.responseText);

		}
	}

};

function updateData(text) {

	var Vstop = false;
	try // Internet Explorer
	{
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = "false";
		xmlDoc.loadXML(text);
	} catch (e) {
		try // Firefox, Mozilla, Opera, etc.
		{
			parser = new DOMParser();
			xmlDoc = parser.parseFromString(text, "text/xml");
		} catch (e) {
			alert(e.message)
		}
	}

	var element = xmlDoc.getElementsByTagName("Champ");

	for ( var i = 0; element[i] != null; i++) {
		try {
			var ID = element[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue;

			var Obligatoire = element[i].getElementsByTagName("Obligatoire")[0].childNodes[0].nodeValue;
			var Disabled = element[i].getElementsByTagName("Disabled")[0].childNodes[0].nodeValue;
			var Longueur = element[i].getElementsByTagName("Longueur")[0].childNodes[0].nodeValue;
			var Valeur = ""
			var Erreur = "";
			var Description = "";
			var VinnerHTML = "";
			var VBgColor = "";
			var VColor = "";

			if (element[i].getElementsByTagName("Valeur")[0] != null)
				if (element[i].getElementsByTagName("Valeur")[0].childNodes[0] != null)
					Valeur = element[i].getElementsByTagName("Valeur")[0].childNodes[0].nodeValue;

			var Type = ""
			if (element[i].getElementsByTagName("Type")[0] != null)
				if (element[i].getElementsByTagName("Type")[0].childNodes[0] != null)
					Type = element[i].getElementsByTagName("Type")[0].childNodes[0].nodeValue;

			if (element[i].getElementsByTagName("Erreur")[0] != null)
				if (element[i].getElementsByTagName("Erreur")[0].childNodes[0] != null)
					Erreur = element[i].getElementsByTagName("Erreur")[0].childNodes[0].nodeValue;

			if (element[i].getElementsByTagName("innerHTML")[0] != null)
				if (element[i].getElementsByTagName("innerHTML")[0].childNodes[0] != null)
					VinnerHTML = element[i].getElementsByTagName("innerHTML")[0].childNodes[0].nodeValue;

			if (element[i].getElementsByTagName("BgColor")[0] != null)
				if (element[i].getElementsByTagName("BgColor")[0].childNodes[0] != null)
					VBgColor = element[i].getElementsByTagName("BgColor")[0].childNodes[0].nodeValue;

			if (element[i].getElementsByTagName("Color")[0] != null)
				if (element[i].getElementsByTagName("Color")[0].childNodes[0] != null)
					VColor = element[i].getElementsByTagName("Color")[0].childNodes[0].nodeValue;

			if (element[i].getElementsByTagName("Description")[0] != null)
				if (element[i].getElementsByTagName("Description")[0].childNodes[0] != null)
					Description = element[i]
							.getElementsByTagName("Description")[0].childNodes[0].nodeValue;

			// alert(ID);
			var ele = document.getElementsByName(ID);
			// alert(ele.length);
			for ( var j = 0; ele[j] != null; j++) {
				// var x=document.getElementById(ID);
				// alert(j);
				var x = ele[j];

				if (Erreur != "") {
					if (ElementErreur != null)
						return;
					Vstop = true;
					ElementErreur = x;

					ElementErreur.style.borderColor = "#FF0000";
					// alert(Erreur);
					x = document.getElementById(ID + "DESC");

					if (x != null) {
						x.innerHTML = Erreur;
						x.style.color = "#FF0000";
					}
					Block('body');

					document.getElementById("alert").style.visibility = "visible";
					document.getElementById("AlertText").innerHTML = Erreur;
					document.getElementById("AlertMsgB").focus();
					return;
				} else {

					if (x == ElementErreur) {
						if (ElementErreur != null) {
							ElementErreur.style.borderColor = "";
							tt = document.getElementById(ElementErreur.id
									+ "DESC");

							if (tt != null) {
								tt.innerHTML = "";
								tt.style.color = "";
							}
						}
						// alert("fin block");
						ElementErreur = null;
					}
					if (VBgColor != "") {

						x.style.backgroundColor = VBgColor;
					}
					if (VColor != "")
						x.style.color = VColor;

					if (VinnerHTML != "") {
						x.innerHTML = "";
						// alert("-"+VinnerHTML);
						while (VinnerHTML.indexOf(";") >= 0) {
							var ptri = VinnerHTML.substring(0, VinnerHTML
									.indexOf(";"));
							var element = document.createElement("option");
							element.value = ptri
									.substring(0, ptri.indexOf(":"));
							element.text = ptri
									.substring(ptri.indexOf(":") + 1);

							VinnerHTML = VinnerHTML.substring(VinnerHTML
									.indexOf(";") + 1);

							x.add(element);

						}

					}
					
					if((x.type != "button") &&(x.type != "submit")&&(x.type != "reset")&&(!x.disabled)){
								modifier = true;
					}
					x.maxLength = Longueur;

					if (x.value != Valeur) {
						x.value = Valeur;
					}
					// alert("- "+Valeur);
					x.obligatoire = Obligatoire;
					x.typeValeur = Type;
					if (Disabled == 'true')
						x.disabled = true;
					else
						x.disabled = false;
					// alert(x.id+" "+Longueur);

					// x.value=Valeur;

					if (x.type == 'select-one')
						if ((x[x.length - 1].value == "")
								&& (x[x.length - 1].name != "Recherche")) {
							if (x.obligatoire == "true") {
								x.remove(x.length - 1);
								x.value = Valeur;
								
							}

						}
					// alert(x.type);
					if (x.type == null)
						x.innerHTML = Valeur;

					x = document.getElementById(ID + "DESC");

					if (x != null) {
						x.innerHTML = "";
						x.innerHTML = Description;
					}

				}

			}
		} catch (e) {
			alert("in " + e.description);
		}
	}
	Erreur = "";
	// alert(ElementErreur);

	var element1 = xmlDoc.getElementsByTagName("Form");

	for ( var i = 0; element1[i] != null; i++) {
		ElementErreur = null;
		var ID = element1[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue;
		// alert("-"+ID+"-");
		// alert(element1[i].getElementsByTagName("Text")[0].nodeValue);
		var Message = "";
		var Text="NULL"
		if (element1[i].getElementsByTagName("Text")[0] != null)
		Text = element1[i].getElementsByTagName("Text")[0].firstChild.nodeValue;
		// alert(element1[i].getElementsByTagName("Text")[0].firstChild.nodeValue);
		if (element1[i].getElementsByTagName("AFF")[0].firstChild)
			var Affichage = element1[i].getElementsByTagName("AFF")[0].firstChild.nodeValue;

		if (element1[i].getElementsByTagName("Erreur")[0] != null)
			if (element1[i].getElementsByTagName("Erreur")[0].childNodes[0] != null)
				Erreur = element1[i].getElementsByTagName("Erreur")[0].childNodes[0].nodeValue;

		if (element1[i].getElementsByTagName("Message")[0] != null)
			Message = element1[i].getElementsByTagName("Message")[0].childNodes[0].nodeValue;
       
		if (Erreur != "") {
			// alert(Erreur);
			Vstop = true;
			Block('body');
			document.getElementById("alert").style.visibility = "visible";
			document.getElementById("AlertText").innerHTML = Erreur;
		}else{
			//alert("fin modif")
			modifier=false
		}
		
		if(Text=="NULL")
			return;

		if (Affichage == "Fenetre") {

			Text = "<div id='"
					+ ID
					+ "_Fenetre'  style='left: 100px; top: 140px;' class='Fenetre'>"
					+ Text
					+ "</Div>"
					+ "<iframe id='"
					+ ID
					+ "_Blockage' class='BlockFrame' frameborder='0' style='left: 0px; top: 0px; z-index=1; width=1000px; height=1000px; ' scrolling='no' src='about:blank'></iframe><div id='"
					+ ID
					+ "_divBlockage' class='BlockDiv' style='left: 0px; top: 0px;z-index=1;width=1000px; height=1000px;background-color:#000000; ' ></div>";

			// alert(Erreur);
		}

		var x = document.getElementById("Result" + ID);
		// alert("Result"+ID);
		if (x == null) {
			currentRow = -1;
			x = document.getElementById("Result" + ID.substr(0, ID.length - 2)
					+ "ALL");

			// alert(ID.substr(0,ID.length-2));

			if (x == null)
				x = document.getElementById("Main");
		}

		// alert(Text);
		x.innerHTML = "";
		x.innerHTML = Text;

		var cur = document.getElementById(ID + "CURSOR");

		if (cur != null) {
			if (currentRow >= 0) {

				var tetste = (currentRow * 1) + 1;
				cur.innerHTML = "&nbsp;&nbsp;&nbsp; Enregistrement : " + tetste
						+ "/" + totalRow;

			}
		}

		if (Message != "") {
			// alert(Message);
			Block('body');
			document.getElementById("info").style.visibility = "visible";
			document.getElementById("InfoText").innerHTML = Message;
		}

	}

	var element2 = xmlDoc.getElementsByTagName("Bouton");
	// alert(element1.length);
	for ( var i = 0; element2[i] != null; i++) {
		var MsgC = "", MsgA = "";
		var ID = element2[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue;

		// alert(element1[i].getElementsByTagName("Text")[0].nodeValue);
		var Action = element2[i].getElementsByTagName("Action")[0].firstChild.nodeValue;
		// alert(element1[i].getElementsByTagName("Text")[0].firstChild.nodeValue);
		if (element2[i].getElementsByTagName("MsgC")[0].firstChild)
			MsgC = element2[i].getElementsByTagName("MsgC")[0].firstChild.nodeValue;
		if (element2[i].getElementsByTagName("MsgA")[0].firstChild)
			MsgA = element2[i].getElementsByTagName("MsgA")[0].firstChild.nodeValue;
     // alert('fin '+Action+' '+ID)
		if (!Vstop) {
			if (Action == "Valider") {

				if (ElementErreur != null) {
					Vstop = true;

					return;
				}
			
				Valider(ID, MsgC, MsgA);
				
			}
			if (Action == "Annuler") {
				ElementErreur = null;
				Annuler(ID, MsgC, MsgA);

			}
			if (Action == "ValiderQuitter") {
				if (ElementErreur != null) {
					Vstop = true;

					return;
				}
				
				
			
				ValiderQuitter(ID, MsgC, MsgA);
				
			}
			if (Action == "ValiderModif") {
				if (ElementErreur != null) {
					Vstop = true;

					return;
				}
				
				
		
				ValiderModif(ID, MsgC, MsgA);
				

			}
			if (Action == "Precedent") {
				if (ElementErreur != null) {
					Vstop = true;

					return;
				}
				if(modifier == true)
				ValiderModif(ID, MsgC, MsgA);
				precedentRow(ID);

			}

			if (Action == "Suivant") {
				if (ElementErreur != null) {
					Vstop = true;

					return;
				}
				if(modifier == true)
				ValiderModif(ID, MsgC, MsgA);
				nextRow(ID);

			}

			if (Action == "Edition") {
				if (ElementErreur != null) {
					Vstop = true;

					return;
				}

				Edition(ID, MsgC, MsgA);

			}

			if (Action == "Accueil") {
				ElementErreur = null;
				Accueil(ID, MsgC, MsgA);

			}
			if (Action == "Quitter") {
				ElementErreur = null;
				Quitter(ID, MsgC, MsgA);

			}
			if (Action == "RechRapide") {
				if (ElementErreur != null) {
					Vstop = true;

					return;
				}

				ValiderRechRapide(ID, MsgC, MsgA);

			}
		}
	}

	var element1 = xmlDoc.getElementsByTagName("Download");
	// alert(element1.length);
	for ( var i = 0; element1[i] != null; i++) {

		var file = element1[i].childNodes[0].nodeValue;
		// alert(file);
		// window.open("../download?File="+file,"_this");
		window.open("../download?File=" + file);
		// location.replace("../download?File="+file);
	}
	var element1 = xmlDoc.getElementsByTagName("Pourcent");
	// alert(element1.length);
	for ( var i = 0; element1[i] != null; i++) {
		// alert(element1[i].childNodes[0].nodeValue);
		pourcent = element1[i].childNodes[0].nodeValue;
		// alert(pourcent);
		document.getElementById("BarCharg").style.visibility = "visible";
		document.getElementById("BarCharg_core").style.width = (pourcent) + "%";
		document.getElementById("Pourcent").innerHTML = pourcent + " %";
		// alert(pourcent);
		if (pourcent >= 100) {
			document.getElementById("BarCharg").style.visibility = "hidden";
			clearInterval(timer);
		}

	}

	var element1 = xmlDoc.getElementsByTagName("LogMessage");
	// alert(element1.length);
	for ( var i = 0; element1[i] != null; i++) {
		// alert(element1[i].childNodes[0].nodeValue);
		if (element1[i].childNodes[0] != null) {
			cvpourcent = element1[i].childNodes[0].nodeValue;
			document.getElementById("LogText").innerHTML = cvpourcent;
		}

	}

	var element = document.getElementsByTagName("actualisation");

	for ( var i = 0; element[i] != null; i++) {

		var temp = element[i].id;
		if (temp == null)
			temp = element[i].innerHTML;

		var tx = element[i].x;
		element[i].x = "No";

		if ((tx != "No") && (temp != "No"))
			ActualiserTab(temp, "");

	}

	var element = document.getElementsByTagName("Charger");

	for ( var i = 0; element[i] != null; i++) {

		var temp = element[i].value;

		if (temp == null)
			temp = element[i].innerHTML;

		setChamp(temp, 'New');

		ChangeTag('tagHeader_Over');

		MenuOver(document.getElementById(temp));

	}

}
function getElementsById(sId) {
	var outArray = new Array();
	if (typeof (sId) != 'string' || !sId) {
		return outArray;
	}
	;

	if (document.evaluate) {
		var xpathString = "//*[@id='" + sId.toString() + "']"
		var xpathResult = document.evaluate(xpathString, document, null, 0,
				null);
		while ((outArray[outArray.length] = xpathResult.iterateNext())) {
		}
		outArray.pop();
	}
	/*
	 * else if(document.all) { if(document.all[sId]!=null) for(var
	 * i=0;document.all[sId][i]!=null;i++){ outArray[i] = document.all[sId][i];}
	 *  }
	 */else if (document.getElementsByTagName) {

		var aEl = document.getElementsByTagName('input');
		for ( var i = 0, j = aEl.length; i < j; i += 1) {

			if (aEl[i].id == sId) {
				outArray.push(aEl[i]);
			}
			;
		}
		;

		/*
		 * var aEl = document.getElementsByTagName( 'select' ); for(var
		 * i=0,j=aEl.length;i<j;i+=1){
		 * 
		 * if(aEl[i].id == sId ) { outArray.push(aEl[i]); }; };
		 */

	}
	;

	return outArray;
}