function setForme(ID,Where) {
    
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
       Patienter();
		httpRequest.onreadystatechange = function() {  setFormeContents(httpRequest,ID,Where); };
		
		var abc=(new Date()).getSeconds()+""+(new Date()).getMinutes()+""+(new Date()).getDate();
		//alert(abc);
		if(Where==null) Where="";
		
		httpRequest.open('GET', '../setforme?idForme='+ID+"&Model=&Action=&Where="+Where+"&rien="+abc, true);
		
		
        httpRequest.send(null);
		
    };

function setFormeContents(httpRequest,ID,In) {
		
	//if (httpRequest.readyState == 2) { t=httpRequest.responseText+"";};
			
        if (httpRequest.readyState == 4) {

		if (httpRequest.status == 200) {
				
				
			
                var reponse=httpRequest.responseText;
				alert(reponse);
					
					if(reponse.substr(0,11)=="DECONNECTER"){
						
						location.replace("index");
					}
					
					else
					
					{  try //Internet Explorer
						  {
						  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
						  xmlDoc.async="false";
						  xmlDoc.loadXML(reponse);
						  }
						catch(e)
						  {
						  try //Firefox, Mozilla, Opera, etc.
							{
							parser=new DOMParser();
							xmlDoc=parser.parseFromString(reponse,"text/xml");
							}
						  catch(e) {alert(e.message)}
						  }
						
						var element1=xmlDoc.getElementsByTagName("Form");
		 //alert(element1.length);
						 for (var i=0;element1[i]!=null;i++){
								
								var ID=element1[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue;
								alert("-"+ID+"-");
								//alert(element1[i].getElementsByTagName("Text")[0].nodeValue);
								var Text=element1[i].getElementsByTagName("Text")[0].firstChild.nodeValue
								//alert(element1[i].getElementsByTagName("Text")[0].firstChild.nodeValue);
								
								var x=document.getElementById("Result"+ID);
								
								if(x==null)
								{
									x=document.getElementById("Main");
								}
								
								//alert(Text);
								x.innerHTML=Text;
								
								var element=document.getElementsByTagName("actualisation");
									 
									 for (var i=0;element[i]!=null;i++){
									 	
										var temp=element[i].value;
										alert(temp);
										
										ActualiserTab(temp);
										
										
									 }
						 }
						 
						FinPatienter();
						//setMenu("");
					}
			
           
			} else {
                alert('Un problème est survenu avec la requête. '+httpRequest.status );
          
			}
        }

    };
	
	
	function setMenu(ID) {
    
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
       
		httpRequest.onreadystatechange = function() {  setMenuContents(httpRequest); };
		
		var abc=(new Date()).getSeconds()+""+(new Date()).getMinutes()+""+(new Date()).getDate();

		httpRequest.open('GET', '../setforme?idForme='+ID+"&Menu=yes&rien="+abc, true);
		
		//alert(abc);
        httpRequest.send(null);
		
    };
	
	function setMenuContents(httpRequest) {
		
	
			
        if (httpRequest.readyState == 4) {

		if (httpRequest.status == 200) {
				
				
			
                var reponse=httpRequest.responseText;
				//alert(reponse);
					
					if(reponse.substr(0,11)=="DECONNECTER"){
						
						location.replace("index");
					}
					
					else
					{
                        
						x =document.getElementById("MenuForm");
						x.innerHTML="";
						x.innerHTML=reponse;
						
					}
			
           
			} else {
                alert('Un problème est survenu avec la requête. '+httpRequest.status );
          
			}
        }

    };