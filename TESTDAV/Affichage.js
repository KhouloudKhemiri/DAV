// JavaScript Document

var err=null;
 var ie = (document.all)? true:false;
      var ns4 = (document.layers)? true:false;
      var ns6 = (document.getElementById)? true:false;

var interAJAX=0;

 function MenuOver(Champ){

	Champ.className=Champ.className+"_Over";
 
 }
 
 function MenuOut(Champ){

	Champ.className=Champ.className.substr(0, Champ.className.indexOf("_Over"));
 }
 
 function getElementsByClassName(className, tag, elm){
	var testClass = new RegExp("(^|s)" + className + "(s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
	var returnElements = [];
	var current;
	var length = elements.length;
	for(var i=0; i<length; i++){
		current = elements[i ];
		if(testClass.test(current.className)){
			returnElements.push(current);
		}
	}
	return returnElements;
}

 function Select(Champ,clas){
	
	
	tst=clas;
	
	
	try{
	var element=getElementsByClassName(clas+"Select");

		 for (var i=0;element[i]!=null;i++){
			
			element[i].className=tst;
		 
		 }
	
	var element=getElementsByClassName(clas+"Select_Over");

		 for (var i=0;element[i]!=null;i++){
			
			element[i].className=tst+"_Over";
		 
		 }}catch(e)
	{
	}
		if(Champ.className.indexOf("_Over")>0)
		 Champ.className=tst+"Select_Over";
		 else
		 Champ.className=tst+"Select";
 }
 
 
 function playsound(soundfile){
	
	if (document.all && document.getElementById){
		document.getElementById("soundeffect").src="" //reset first in case of problems
		document.getElementById("soundeffect").src=soundfile
	}
}

function ClickElargi(ID){
	x=document.getElementById(ID);
	
 if(x.test==1)
 {  
   MenuOut(x); 
   x.test=0;
 } 
 else 
 { 
 MenuOver(x); 
 x.innerHTML=x.innerHTML;
 x.test=1; 
 }
 

}

function ClickBannier(ID){
	x=document.getElementById(ID);
	
 if(x.test==1)
 {  
   MenuOut(x); 
  
    document.getElementById("HEADER1").style.backgroundImage="";
   document.getElementById("reduir").innerHTML="<U>Réduire</U>";
   x.test=0;
 } 
 else 
 { 
 MenuOver(x); 
 document.getElementById("HEADER1").style.backgroundImage="url(Images/ENTETE_1.gif)";

 document.getElementById("reduir").innerHTML="<U>Agrandir</U>";
 x.innerHTML=x.innerHTML;
 x.test=1; 
 }
 

}

function Block(Id){
	
	interAJAX++;
	Patienter();
	show_warning=true;
	//document.style.cursor="wait";
	var curleft = curtop = 0;
 var obj=document.getElementById(Id);
 if(document.all){
	if (obj.offsetParent) {


	do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
 
	document.getElementById("Blockage").style.height = document.getElementById(Id).offsetHeight;
	document.getElementById("Blockage").style.width = document.getElementById(Id).offsetWidth;
	document.getElementById("Blockage").style.top= curtop;
	document.getElementById("Blockage").style.left= curleft;
	document.getElementById("divBlockage").style.height = document.getElementById(Id).offsetHeight;
	document.getElementById("divBlockage").style.width = document.getElementById(Id).offsetWidth;
	document.getElementById("divBlockage").style.top= curtop;
	document.getElementById("divBlockage").style.left= curleft;
	document.getElementById("divBlockage").style.cursor="wait";
 }
}

function DeBlock(Id){
 
interAJAX--;
 
 if(interAJAX<=0)
 { 
 
 show_warning=false;
 document.getElementById("LogText").innerHTML="";	
 clearInterval(timer1);
								
 //document.style.cursor="default";
 FinPatienter();
	 if(document.all){
		document.getElementById("Blockage").style.height = "1px";
		document.getElementById("Blockage").style.width = "1px";
		document.getElementById("Blockage").style.top= "1px";
		document.getElementById("Blockage").style.left= "1px";
		document.getElementById("divBlockage").style.height = "1px";
		document.getElementById("divBlockage").style.width = "1px";
		document.getElementById("divBlockage").style.top= "1px";
		document.getElementById("divBlockage").style.left= "1px";
	 }
 }
 
}

function Mouve(e,Id){

if(Id==null)
mon_div=document.getElementsByClassName('Fenetre',document.getElementById("Main") )[0];
else
mon_div=document.getElementById(Id);


if (ie) {
            //Récupération de la position de la souris
            window.lastX=event.clientX;
            window.lastY=event.clientY;
            // lance doDrag tant que l'on appuie sur le bouton de la souris en la bougeant
            document.onmousemove=doDrag;
            // lance endDrag quand on relache le bouton de la souris
            document.onmouseup=endDrag; 
}else if (ns4) {
            //Récupération de la position de la souris
            window.lastX=e.pageX;
            window.lastY=e.pageY;
            // lance doDrag tant que l'on appuie sur le bouton de la souris en la bougeant
            document.captureEvents(Event.MOUSEMOVE)
            document.onmousemove=doDrag;
            // lance endDrag quand on relache le bouton de la souris
            document.captureEvents(Event.MOUSEUP)
            document.onmouseup=endDrag; 
}else if (ns6) {
            //Récupération de la position de la souris
            window.lastX=e.clientX;
            window.lastY=e.clientY;
            // lance doDrag tant que l'on appuie sur le bouton de la souris en la bougeant
            window.onmousemove=doDrag;
            // lance endDrag quand on relache le bouton de la souris
            window.onmouseup=endDrag; }

}

function doDrag(e) {
// Calcul de l'écart de position de la souris
//alert(Fenetre);


 if (ie) {
            // Calcul de l'écart de position de la souris
			document.onselectstart = function() { return false; };
            var difX=event.clientX-window.lastX;
            var difY=event.clientY-window.lastY;
            //Récupération de la position du div et ajout de l'écart de position de la souris
            var newX1 = parseInt(mon_div.style.left)+difX;
            var newY1 = parseInt(mon_div.style.top)+difY;
            // Assignation des nouvelles coordonnées au div
			if(newY1>10){
            mon_div.style.left=newX1+"px";
            mon_div.style.top=newY1+"px";
            //Assignation de l'anciènne position de la souris
            window.lastX=event.clientX;
            window.lastY=event.clientY; 
			}else endDrag(e);
}else if (ns4) {
            // Calcul de l'écart de position de la souris
            var difX=e.pageX-window.lastX;
            var difY=e.pageY-window.lastY;
			document.onselectstart = function() { return false; };
            //Récupération de la position du div et ajout de l'écart de position de la souris
            var newX1 = parseInt(document.layers.mon_div.left)+difX;
            var newY1 = parseInt(document.layers.mon_div.top)+difY;
            // Assignation des nouvelles coordonnées au div
			if(newY1>10){
            document.layers.mon_div.left=newX1;
            document.layers.mon_div.top=newY1;
            //Assignation de l'anciènne position de la souris
            window.lastX=e.pageX;
            window.lastY=e.pageY; 
			}else endDrag(e);
}else if (ns6) {
            // Calcul de l'écart de position de la souris
            var difX=e.clientX-window.lastX;
            var difY=e.clientY-window.lastY;
			window.onselectstart = function() { return false; };
            //Récupération de la position du div et ajout de l'écart de position de la souris
            var newX1 = parseInt(mon_div.style.left)+difX;
            var newY1 = parseInt(mon_div.style.top)+difY;
            // Assignation des nouvelles coordonnées au div
			if(newY1>10){
            mon_div.style.left=newX1+"px";
            mon_div.style.top=newY1+"px";
            //Assignation de l'anciènne position de la souris
            window.lastX=e.clientX;
            window.lastY=e.clientY;}else endDrag(e);
	
}

};


function endDrag(e) {

//Réinitialisation du onmousemove
  if (ie || ns4) {
            //Réinitialisation du onmousemove
            document.onmousemove=null; 
			document.onselectstart = function() { return true; };} 
		else if (ns6) {
            //Réinitialisation du onmousemove
            window.onmousemove=null; 
			window.onselectstart = function() { return true; };}


};



function Patienter(){
	document.getElementById('CHG').style.visibility="visible";
}



function FinPatienter(){
	document.getElementById('CHG').style.visibility="hidden";
	document.getElementById("alert").style.visibility="hidden";
	document.getElementById("AlertText").innerHTML="";
	document.getElementById("info").style.visibility="hidden";
	document.getElementById("InfoText").innerHTML="";
}



document.getElementsByClassName = function(nomClasse, element) { 
 
 var resulat = new Array(); 
  if(nomClasse!="" || typeof element == 'object'){ 
    var mesFils = element.getElementsByTagName('*'); 
    var exp_reg = new RegExp("(^|\\s)" + nomClasse + "(\\s|$)"); 
    for (var i = 0; i < mesFils.length; i++) { 
      var laClasse = (mesFils[i].className)? mesFils[i].className : ""; 
      if(laClasse != "" && (laClasse == nomClasse || laClasse.match(exp_reg))){ 
        resulat.push(mesFils[i]) 
      } 
    } 
  } 
  return resulat; 
};


function ChangeTag(NomClass){
	
	var tb=document.getElementsByClassName(NomClass,document);
	
	 for (var i = 0; i < tb.length; i++) { 
	 	
		
			MenuOut(tb[i])	;
		
		
		
	 }

}