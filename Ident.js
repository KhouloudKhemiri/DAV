// JavaScript Document

function Identifier(IdUser,PASS) {
     
	 

	  
        var httpRequest = false;
		//alert(Valeur);
        if (window.XMLHttpRequest) { // Mozilla, Safari,...
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType('text/xml');
                // Voir la note ci-dessous à propos de cette ligne
            }
        }
        else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {}
            }
        }

        if (!httpRequest) {
            alert('Abandon :( Impossible de créer une instance XMLHTTP');
            return false;
        }
       
		httpRequest.onreadystatechange = function() {  IdentifierContents(httpRequest); };
		
		var abc7=(new Date()).getSeconds()+""+(new Date()).getMinutes();

		httpRequest.open('GET', 'identification?Code='+IdUser+"&PWD="+PASS+"&rien="+abc7, true);
		
		
        httpRequest.send(null);
		
    };

function IdentifierContents(httpRequest) {
		
	
			
        if (httpRequest.readyState == 4) {

		if (httpRequest.status == 200) {
				
				
			
                var reponse=httpRequest.responseText;
				//alert(reponse);
					
					if(reponse.substr(0,10)=="IDENTIFIER"){
						
						location.replace("index");
						
						
					}
					
					
					else
					{
                        
						x =document.getElementById("IdentErreur");
						x.innerHTML="";
						x.innerHTML=reponse;
						x.className="Erreur";
						
						
						
					}
			
           
			} else {
                alert('Un problème est survenu avec la requête. '+httpRequest.status );
          
			}
        }

    };