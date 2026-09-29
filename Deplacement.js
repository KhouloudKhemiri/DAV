var show_warning = false;

// Call function ask_for_close from the html onbeforeunload event
// Only use with Oracle Forms applications.

function ask_for_close() {
   if (show_warning || modifier) {
      event.returnValue = "AVERTISSEMENT : NE PAS fermer l'application de cette façon ..."
                        + "Risque de perte de données en fermant la session\n"
                        + "Merci de cliquer sur  [Annuler] et utiliser le bouton 'Quitter l'application'";
   }
}

function evClick(oEvent,x){ 
if(x.typeValeur=="Date") displayDatePicker(x.name,oEvent);

}

function TAB(oEvent,x){ //KeyDown
var keynum
var keychar
var numcheck

var Key; 

if (document.all) Key = window.event.keyCode;
else {Key = oEvent.which} 




if (Key == 13 || Key == 9)
                {
					
					Key=9;
					if (document.all) window.event.keyCode=Key; 
					
					else {
						
						
    				    var oNewEvent = document.createEvent("KeyEvents");
						oNewEvent.initKeyEvent('keydown', true, true, window, false, false, false, false, 0,9 );
						oEvent.preventDefault();
						oEvent.target.dispatchEvent(oNewEvent);

						
						}
					
					
					
				}
numcheck = /\d/;



};

function ApreBlur(e,x){ //blur

	x.style.backgroundColor="";
if(x.typeValeur=="Date") cacher();
}

function Apre(e,x){ // KeyUp 
	var numcheck
	var Key; 

if (document.all) Key = window.event.keyCode;
else {Key = e.which} 


	//alert(x.id+" "+x.value.length+" "+x.maxlength);

if ( Key > 40 && Key < 130)
                {
					
             // alert(x.value.length+" "+x.maxLength);
			   if(x.value.length == x.maxLength)
					{					
					
					
					y=document.forms[0];	
					
					i=0;
					if(y!=null){

						while(y[i].id!=x.id)
						i++;
						try{
						while(y[i+1].disabled==true){
						
						i++;
						}
						y[i+1].focus();
						if(y[i+1].type=="text")
						y[i+1].select();
						}catch(e){}
					}
					
					} 
							
				}
							

numcheck = /\d/

return true;

}

function Passage(e,sx){ //focus
	if(ElementErreur!=null){
		
			ElementErreur.focus();
			try{
			ElementErreur.select();
			}catch(e){};
			return false;
			}
	x=getNext();
	
	if(x!=null) {
		//alert(x.id);
	if(parseInt(sx.id,10)>parseInt(x.id,10)){
		
		x.focus();
		
		x.style.backgroundColor="#FFFFCC";
		//alert(x.id);
		if(x.type=="text")
		x.select();
		
		return false;
	}
	
	}
	
	return true;
		
}


function getNext(){
	 			
		          y=document.forms[0];					
					i=0;
				if(y!=null)
					while(y[i]!=null){
						if((y[i].disabled!=true)&&(y[i].obligatoire=="true")&&(y[i].value=="")){
							return y[i];
						}
						
						i++;
					}
					
					
	
	
	return null;

}


function ControleSaisie(e,ch){ ////KeyPress
	//alert(ch.typeValeur);
	//Block("Main");
	if (!e) var e = window.event;
	

	if(ch.typeValeur=="Alphabetique") return Alpha(e);
	if(ch.typeValeur=="AlphaNumerique") return AlphaNumerique(e);
	if(ch.typeValeur=="Float") return Float(e);
	if(ch.typeValeur=="Numerique") return Numerique(e);
	if(ch.typeValeur=="Date") return CDate(e);
}


function Numerique(e){
var Key; 

if (document.all) Key = window.event.keyCode;
else {Key = e.which} 

	if ( Key == 13 || Key == 9)
		playsound('Images/Exclamation.wav');
	/*else
	{
		ArrErr();
	}*/

	if((Key < 48 || Key > 57) &&  Key != 32 &&  Key != 8 &&  Key != 0) 
	{
		playsound('../Images/Exclamation.wav'); 
		
		if (document.all) window.event.returnValue = false; 
		else {if (e.cancelable ) {e.cancel = true; e.preventDefault(); return false; } }
	}
	

return true; 
}

function Float(e){
var Key; 

if (document.all) Key = window.event.keyCode;
else {Key = e.which} 

	if ( Key == 13 || Key == 9)
		playsound('Images/Exclamation.wav');
	/*else
	{
		ArrErr();
	}*/

	if((Key < 48 || Key > 57) &&  Key != 32 &&  Key != 43 &&  Key != 44 &&  Key != 46 &&  Key != 45 &&  Key != 8 &&  Key != 0) 
	{
		playsound('../Images/Exclamation.wav'); 
		
		if (document.all) window.event.returnValue = false; 
		else {if (e.cancelable ) {e.cancel = true; e.preventDefault(); return false; } }
	}
	

return true; 
}

function AlphaNumerique(e){
	
	var Key; 

if (document.all) Key = window.event.keyCode;
else {Key = e.which} 

if( ((Key < 40 || Key > 122) || (Key < 40 || Key > 122)) &&  Key != 32 &&  Key != 37 &&  Key != 8 &&  Key != 0) 
{
	playsound('../Images/Exclamation.wav'); 
	//OD_Alert("Ce champ doit étre AlphaNumérique",0,0,"ERREUR");
	if (document.all) window.event.returnValue = false; 
else {if (e.cancelable ) {e.preventDefault();}}
}
if((Key < 40 || Key > 122)  &&  Key != 32  &&  Key != 8 &&  Key != 37  &&  Key != 0 ) 
{
	playsound('../Images/Exclamation.wav');
	//OD_Alert("Ce champ doit étre AlphaNumérique",0,0,"ERREUR");

	return false;
}
//ArrErr();

return true;
}

function Alpha(e){
	var Key; 

if (document.all) Key = window.event.keyCode;
else {Key = e.which} 

if( ((Key < 65 || Key > 122 ) || (Key < 97 && Key > 90)) &&  Key != 32 &&  Key != 37 &&  Key != 8 &&  Key != 0) 
{
	playsound('../Images/Exclamation.wav');
	//OD_Alert("Ce champ doit étre Alphabétique",0,0,"ERREUR");

	if (document.all) window.event.returnValue = false; 
else {if (e.cancelable ) {e.preventDefault();}}
}
if( ((Key < 65 || Key > 122 ) || (Key < 97 && Key > 90)) &&  Key != 32 &&  Key != 37 &&  Key != 8 &&  Key != 0) 
{
	playsound('../Images/Exclamation.wav');
	//OD_Alert("Ce champ doit étre Alphabétique",0,0,"ERREUR");

	return false;
}
//ArrErr();

return true;
}



function CDate(e){
	var Key; 

if (document.all) Key = window.event.keyCode;
else {Key = e.which} 

	
if((Key < 47 || Key > 57)  &&  Key != 45 &&  Key != 32 &&  Key != 8 &&  Key != 0) 
{
	playsound('../Images/Exclamation.wav'); 
	if (document.all) window.event.returnValue = false; 
else {if (e.cancelable ) {e.preventDefault();}}
}
if((Key < 47 || Key > 57)  &&  Key != 45  &&  Key != 32 &&  Key != 8  &&  Key != 0 ) 
{
	playsound('../Images/Exclamation.wav');
	return false;
}
//ArrErr();

return true;
}
