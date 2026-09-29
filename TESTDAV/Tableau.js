
var currentRow = -1;
var totalRow = 0;
var finalRow = 0;

function ActualiserTab(ID, TypeRech) {

    if (Vwait) {

        ajoutWait('ActualiserTab("' + ID + '")');

    }
    else {

        Vwait = true;
        var httpRequest = false;
        //alert(Valeur);
        if (window.XMLHttpRequest) { // Mozilla, Safari,...
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType('text/xml');
                // Voir la note ci-dessous � propos de cette ligne
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
                catch (e) {
                }
            }
        }

        if (!httpRequest) {
            alert('Abandon :( Impossible de cr�er une instance XMLHTTP');
            return false;
        }


        httpRequest.onreadystatechange = function() {
            ActualiserTabContents(httpRequest, ID, TypeRech);
        };

        var abc = (new Date()).getSeconds() + "" + (new Date()).getMinutes() + "" + (new Date()).getDate();

        Block('body');
        httpRequest.open('GET', '../getdata?ID=' + ID + "&For=Actualiser&rien=" + abc, true);

        //alert(abc);
        httpRequest.send(null);
    }
}
;

function ActualiserTabContents(httpRequest, ID, TypeRech) {

    //if (httpRequest.readyState == 2) { t=httpRequest.responseText+"";};

    if (httpRequest.readyState == 4) {

        if (httpRequest.status == 200) {



            var reponse = httpRequest.responseText;
            //alert(reponse);
            var xmlDoc;
            if (reponse.substr(0, 11) == "DECONNECTER") {

                location.replace("index");
            }

            else
            {
                try //Internet Explorer
                {
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = "false";
                    xmlDoc.loadXML(reponse);
                }
                catch (e)
                {
                    try //Firefox, Mozilla, Opera, etc.
                    {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(reponse, "text/xml");
                    }
                    catch (e) {
                        alert(e.message)
                    }
                }

                //alert(reponse);
                //document.getElementById("TAB_"+ID).innerHTML="";
                //alert("gff");

                fnInit(xmlDoc, ID, reponse, TypeRech);

            }
            var ptr = getWait();
            Vwait = false;
            if (ptr != null) {


                eval(ptr);
            }
            DeBlock('body');



        } else {
            alert('Un probl�me est survenu avec la requ�te. ' + httpRequest.status);

        }
    }

}
;

function fnInit(xmlDoc, ID, reponse, TypeRech)
{
    // Declare variables and create the header, footer, and caption.
    finalRow = 0;
    oTable = document.getElementById("TAB_" + ID);
    GTable = document.getElementById(ID + "_BODY");
    if (oTable == null)
        ID = ID.substr(0, ID.length - 2);

    // var oCaption = oTable.createCaption();
    var oRow, oCell;
    var i, j;

//try{

    var element = xmlDoc.getElementsByTagName("LN");
    totalRow = xmlDoc.getElementsByTagName("Count")[0].firstChild.nodeValue;
    
    document.getElementById("Result" + ID + "COUNT").innerHTML = xmlDoc.getElementsByTagName("Count")[0].firstChild.nodeValue;
    if (TypeRech != null)
        document.getElementById("Result" + ID + "TypeRech").innerHTML = TypeRech;
    else
        document.getElementById("Result" + ID + "TypeRech").innerHTML = "";
//alert(reponse);
    var oBody = document.getElementById("oTBody0_" + ID);

    while (oBody.rows.length > 0)
    {
        //alert( oBody.rows.length );
        oBody.deleteRow(0);
    }


    for (var i = 0; element[i] != null; i++) {



        oRow = oBody.insertRow(-1);
        oRow.className = "Ligne";
        addEvent(oRow, "mouseover", function() {
            MenuOver(this);
        });
        addEvent(oRow, "mouseout", function() {
            MenuOut(this);
        });

        oRow.ptr = element[i].attributes[0].nodeValue;
        oRow.ptr1 = element[i].attributes[1].nodeValue;
        oRow.ptr2 = element[i].attributes[2].nodeValue;
        oRow.id = "" + (i + finalRow);

        addEvent(oRow, "click", function() {
            currentRow = this.id;
            setChamp(ID + "00", this.ptr);
            this.style.backgroundColor = "#FFFFCF";
        });
        for (var j = 0; element[i].getElementsByTagName("CL")[j] != null; j++) {


            if (element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue != "0")
            {
                oCell = oRow.insertCell(-1);
                oCell.style.overflow = "hidden";
                oCell.width = element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px";
                oCell.style.width = element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px";
                //alert(element[i].getElementsByTagName("CL")[j].attributes[2].nodeValue);
                oCell.align = element[i].getElementsByTagName("CL")[j].attributes[2].nodeValue;

                if (document.all) {
                    if (element[i].getElementsByTagName("CL")[j].childNodes[0] != null) {

                        oCell.innerHTML = "<span class='cellule'  style=\"width:" + element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px;\" >" + element[i].getElementsByTagName("CL")[j].childNodes[0].nodeValue + "&nbsp;</span>";
                    }
                    else
                        oCell.innerHTML = "<span class='cellule'  style=\"width:" + element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px;\" ></span>";
                }
                else {
                    if (element[i].getElementsByTagName("CL")[j].childNodes[0] != null) {

                        oCell.innerHTML = "<div class='cellule'  style=\"width:" + element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px;\" >" + element[i].getElementsByTagName("CL")[j].childNodes[0].nodeValue + "&nbsp;</div>";
                    }
                    else
                        oCell.innerHTML = "<div class='cellule'  style=\"width:" + element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px;\" ></div>";

                }
            }



        }

    }

    finalRow += element.length;

    /*}catch(e){
     alert("Erreur lor du chargement "+e.message+" "+e.Value);
     
     document.getElementById("Main").innerHTML="<textarea style='width:700px'>"+reponse+"</textarea>";
     }*/


}

function NextTab(ID) {

    var httpRequest = false;
    //alert(Valeur);
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/xml');
            // Voir la note ci-dessous � propos de cette ligne
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
            catch (e) {
            }
        }
    }

    if (!httpRequest) {
        alert('Abandon :( Impossible de cr�er une instance XMLHTTP');
        return false;
    }


    httpRequest.onreadystatechange = function() {
        NextTabContents(httpRequest, ID);
    };

    var abc = (new Date()).getSeconds() + "" + (new Date()).getMinutes() + "" + (new Date()).getDate + "" + (new Date()).getMilliseconds();

    Block('body');
    httpRequest.open('GET', '../getdata?ID=' + ID + "&NEXT=ajout&rien=" + abc, true);

    //alert(abc);
    httpRequest.send(null);

}
;

function NextTabContents(httpRequest, ID) {

    //if (httpRequest.readyState == 2) { t=httpRequest.responseText+"";};

    if (httpRequest.readyState == 4) {

        if (httpRequest.status == 200) {



            var reponse = httpRequest.responseText;
            //alert(reponse);
            var xmlDoc;
            if (reponse.substr(0, 11) == "DECONNECTER") {

                location.replace("index");
            }

            else
            {
                try //Internet Explorer
                {
                    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async = "false";
                    xmlDoc.loadXML(reponse);
                }
                catch (e)
                {
                    try //Firefox, Mozilla, Opera, etc.
                    {
                        parser = new DOMParser();
                        xmlDoc = parser.parseFromString(reponse, "text/xml");
                    }
                    catch (e) {
                        alert(e.message)
                    }
                }

                //alert(reponse);
                //document.getElementById("TAB_"+ID).innerHTML="";
                //alert("gff");
                NextfnInit(xmlDoc, ID);

            }
            DeBlock('body');



        } else {
            alert('Un probl�me est survenu avec la requ�te. ' + httpRequest.status);

        }
    }

}
;

function NextfnInit(xmlDoc, ID)
{
    // Declare variables and create the header, footer, and caption.
    //alert(ID);
    oTable = document.getElementById("TAB_" + ID);
    if (oTable == null)
        ID = ID.substr(0, ID.length - 2);

    // var oCaption = oTable.createCaption();
    var oRow, oCell;
    var i, j;


    try {

        var element = xmlDoc.getElementsByTagName("LN");

//alert(element.length);
        var oBody = document.getElementById("oTBody0_" + ID);


        for (var i = 0; element[i] != null; i++) {




            oRow = oBody.insertRow(-1);
            oRow.className = "Ligne";
            addEvent(oRow, "mouseover", function() {
                MenuOver(this);
            });
            addEvent(oRow, "mouseout", function() {
                MenuOut(this);
            });
            oRow.ptr = element[i].attributes[0].nodeValue;
            oRow.ptr1 = element[i].attributes[1].nodeValue;
            oRow.ptr2 = element[i].attributes[2].nodeValue;
            oRow.id = "" + (i + finalRow);

            addEvent(oRow, "click", function() {
                setChamp(ID + "00", this.ptr);
                currentRow = this.id;
                this.style.backgroundColor = "#FFFFCC";
            });
            for (var j = 0; element[i].getElementsByTagName("CL")[j] != null; j++) {


                if (element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue != "0")
                {
                    oCell = oRow.insertCell(-1);
                    oCell.style.overflow = "hidden";
                    oCell.width = element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px";
                    oCell.style.width = element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px";
                    oCell.align = element[i].getElementsByTagName("CL")[j].attributes[2].nodeValue;

                    if (document.all) {
                        if (element[i].getElementsByTagName("CL")[j].childNodes[0] != null) {

                            oCell.innerHTML = "<span class='cellule'  style=\"width:" + element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px;\" >" + element[i].getElementsByTagName("CL")[j].childNodes[0].nodeValue + "&nbsp;</span>";
                        }
                        else
                            oCell.innerHTML = "<span class='cellule'  style=\"width:" + element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px;\" ></span>";
                    }
                    else {
                        if (element[i].getElementsByTagName("CL")[j].childNodes[0] != null) {

                            oCell.innerHTML = "<div class='cellule'  style=\"width:" + element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px;\" >" + element[i].getElementsByTagName("CL")[j].childNodes[0].nodeValue + "&nbsp;</div>";
                        }
                        else
                            oCell.innerHTML = "<div class='cellule'  style=\"width:" + element[i].getElementsByTagName("CL")[j].attributes[0].nodeValue + "px;\" ></div>";

                    }
                }



            }

        }

        finalRow += element.length;

    } catch (e) {
        //alert(e.message);
        document.getElementById(ID + "_BODY").innerHTML += reponse;
        //document.getElementById(ID+"_HEADER").innerHTML="";
    }

    // Set the background color of the bodies.



    // Set the innerText of the caption and position it at the bottom of the table.


// alert(oTable.innerHTML);
}

function addEvent(obj, type, fn) {
    if (obj.attachEvent) {
        obj['e' + type + fn] = fn;
        obj[type + fn] = function() {
            obj['e' + type + fn](window.event);
        }
        obj.attachEvent('on' + type, obj[type + fn]);
    } else
        obj.addEventListener(type, fn, false);
}

function removeEvent(obj, type, fn) {
    if (obj.detachEvent) {
        obj.detachEvent('on' + type, obj[type + fn]);
        obj[type + fn] = null;
    } else
        obj.removeEventListener(type, fn, false);
}

function nextRow(ID) {
    calc = currentRow - 0 + 1;
    pp = document.getElementById("" + calc);
    //alert( pp+" "+calc);

    if (pp != null) {
        //alert(pp.id);
        currentRow = calc;
        setChamp(ID, pp.ptr);
        pp.style.backgroundColor = "#FFFFCC";
    }
    else {



        NextTab(ID.substr(0, ID.length - 2));
        pp = document.getElementById("" + calc);
        if (pp != null) {
            //alert(pp.id);
            currentRow = calc;
            setChamp(ID, pp.ptr);
            pp.style.backgroundColor = "#FFFFCC";
        }

    }


}

function precedentRow(ID) {
    calc = currentRow - 1 + 0;
    pp = document.getElementById("" + calc);
    //alert(pp+" "+calc);
    if (pp != null) {
        //alert(pp.id);
        currentRow = calc;
        pp.style.backgroundColor = "#FFFFCC";
        setChamp(ID, pp.ptr);
    }
}
