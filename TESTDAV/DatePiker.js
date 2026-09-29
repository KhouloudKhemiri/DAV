// JavaScript Document
// TODO purger des elts inutiles
var datePickerDivID = "datepicker";
var iFrameDivID = "datepickeriframe";
var IndP=false;

var dayArrayShort = new Array('Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa');
var dayArrayMed = new Array('Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam');
var dayArrayLong = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
var monthArrayShort = new Array('Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec');
var monthArrayMed = new Array('Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sept', 'Oct', 'Nov', 'Dec');
var monthArrayLong = new Array('Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre');

var defaultDateSeparator = "/";
var defaultDateFormat = "dmy"
var dateSeparator = defaultDateSeparator;
var dateFormat = defaultDateFormat;

function displayDatePicker(dateFieldName,e)
{
	var targetDateField = document.getElementsByName (dateFieldName).item(0);
	var displayBelowThisObject;
	displayBelowThisObject = targetDateField;
	var dateSeparator;
	dateSeparator = defaultDateSeparator;
	var dtFormat;
	dateFormat = defaultDateFormat;
	var x = displayBelowThisObject.offsetLeft;
	var y = displayBelowThisObject.offsetTop + displayBelowThisObject.offsetHeight ;
	
	var parent = displayBelowThisObject;
	while (parent.offsetParent) {
	parent = parent.offsetParent;
	x += parent.offsetLeft;
	y += parent.offsetTop ;
	}
	var posy = 0;
	var posx = 0;
	if(window.event){ 
	posy = e.clientY + document.body.scrollTop;
	posx = e.clientX + document.body.scrollLeft;
	}
	if(e.which){ 
	posy = e.clientY;
	posx = e.clientX;
	}
	var LogEcrant = (document.body.clientHeight / 2);
	var LarEcrant = (document.body.clientWidth / 2);
	var DiffDown = document.body.clientHeight - posy;
	
	if ((posy < 215 ) && (DiffDown < 215))
	{
	
	posy = document.body.clientWidth - 385;
	if (LarEcrant < x )
	x = x - 151;
	else
	x = x + displayBelowThisObject.offsetWidth;
	}
	else {
	if (LogEcrant < posy )
	posy = posy - 197;
	else
	posy = posy + 10;
	}
	drawDatePicker(targetDateField, x, posy);
	document.oncontextmenu=null;
}

function getMouse(event){
	var posx;
	var posy;
	posx=0;
	posy=0;
	var ev=(!e)?window.event:e;//Moz:IE
	if ( ev.pageX ){
	posx=ev.pageX;
	posy=ev.pageY
	}//Mozilla or compatible
	else if( ev.clientX ){
	// or compatible
	posx=ev.clientX;
	posy=ev.clientY
	}
	else{
	// browsers
	return false
	}
	document.getElementById('mydiv').firstChild.data='X='+posx+' Y='+posy;
}

function drawDatePicker(targetDateField, x, y)
{
	var dt = getFieldDate(targetDateField.value );
	
	if (!document.getElementById(datePickerDivID)) {
	var newNode = document.createElement("div");
	newNode.setAttribute("id", datePickerDivID);
	newNode.setAttribute("class", "dpDiv");
	newNode.setAttribute("style", "visibility: hidden;");
	//elparti hethi zidha
	addEvent(newNode,"mouseover",function(){IndP=true;});
	addEvent(newNode,"mouseout",function(){IndP=false;});
	//fin parti
	document.body.appendChild(newNode);
	}
	
	var pickerDiv = document.getElementById(datePickerDivID);
	pickerDiv.style.position = "absolute";
	pickerDiv.style.left = x + "px";
	pickerDiv.style.top = y + "px";
	pickerDiv.style.visibility = (pickerDiv.style.visibility == "visible" ? "hidden" : "visible");
	pickerDiv.style.display = (pickerDiv.style.display == "block" ? "none" : "block");
	pickerDiv.style.zIndex = 10000;
	
	refreshDatePicker(targetDateField.name, dt.getFullYear(), dt.getMonth(), dt.getDate());
}


function refreshDatePicker(dateFieldName, year, month, day)
{
	var thisDay = new Date();
	
	if ((month >= 0) && (year > 0)) {
	thisDay = new Date(year, month, 1);
	} else {
	day = thisDay.getDate();
	thisDay.setDate(1);
	}
	
	var crlf = "\r\n";
	 TABLE = "<table cols=7 class='dpTable'>" + crlf;
	var TABLE = "<table cols=7 class='dpTable'>" + crlf;
	var xTABLE = "</table>" + crlf;
	var TR = "<tr class='dpTR'>";
	var TR_title = "<tr class='dpTitleTR'>";
	var TR_days = "<tr class='dpDayTR'>";
	var TR_todaybutton = "<tr class='dpTodayButtonTR'>";
	var xTR = "</tr>" + crlf;
	var TD = "<td class='dpTD' onMouseOut='this.className=\"dpTD\";' onMouseOver=' this.className=\"dpTDHover\";'  ";
	
	
	var TD_title = "<td colspan=5 class='dpTitleTD'>";
	var TD_buttons = "<td class='dpButtonTD'>";
	var TD_todaybutton = "<td colspan=7 class='dpTodayButtonTD'>";
	var TD_days = "<td class='dpDayTD'>";
	var TD_selected = "<td class='dpDayHighlightTD' onMouseOut='this.className=\"dpDayHighlightTD\";' onMouseOver='this.className=\"dpTDHover\";' "; var xTD = "</td>" + crlf;
	var DIV_title = "<div class='dpTitleText'>";
	var DIV_selected = "<div class='dpDayHighlight'>";
	var xDIV = "</div>";
	
	var html = TABLE;
	
	html += TR_title;
	html += TD_buttons + getButtonCode(dateFieldName, thisDay, -1, "&lt;") + xTD;
	html += TD_title + DIV_title + monthArrayLong[ thisDay.getMonth()] + " " + thisDay.getFullYear() + xDIV + xTD;
	html += TD_buttons + getButtonCode(dateFieldName, thisDay, 1, "&gt;") + xTD;
	html += xTR;
	
	html += TR_days;
	for(i = 0; i < dayArrayShort.length; i++)
	html += TD_days + dayArrayShort[i] + xTD;
	html += xTR;
	
	html += TR;
	
	for (i = 0; i < thisDay.getDay(); i++)
	html += TD + "&nbsp;" + xTD;
	
	do {
	dayNum = thisDay.getDate();
	TD_onclick = " onclick=\"updateDateField('" + dateFieldName + "', '" + getDateString(thisDay) + "');\">";
	
	if (dayNum == day)
	html += TD_selected + TD_onclick + DIV_selected + dayNum + xDIV + xTD;
	else
	html += TD + TD_onclick + dayNum + xTD;
	
	if (thisDay.getDay() == 6)
	html += xTR + TR;
	
	thisDay.setDate(thisDay.getDate() + 1);
	} while (thisDay.getDate() > 1)
	
	if (thisDay.getDay() > 0) {
	for (i = 6; i > thisDay.getDay(); i--)
	html += TD + "&nbsp;" + xTD;
	}
	html += xTR;
	
	var today = new Date();
	var todayString = "Aujourd'hui: " + dayArrayMed[today.getDay()] + ", " + monthArrayMed[ today.getMonth()] + " " + today.getDate();
	html += TR_todaybutton + TD_todaybutton;
	html += "<button class='dpTodayButton' onClick='refreshDatePicker(\"" + dateFieldName + "\");' >Ce mois</button> ";
	html += "<button class='dpTodayButton' onClick='updateDateField(\"" + dateFieldName + "\");' >Fermer</button>"; // TODO image de type fermer
	html += xTD + xTR;
	
	html += xTABLE;
	
	document.getElementById(datePickerDivID).innerHTML = html;
	
	document.getElementsByName (dateFieldName).item(0).focus();
	
	adjustiFrame();
}

function getButtonCode(dateFieldName, dateVal, adjust, label)
	{
	var newMonth = (dateVal.getMonth () + adjust) % 12;
	var newYear = dateVal.getFullYear() + parseInt((dateVal.getMonth() + adjust) / 12);
	if (newMonth < 0) {
	newMonth += 12;
	newYear += -1;
	}
	
	return "<button class='dpButton' onClick='refreshDatePicker(\"" + dateFieldName + "\", " + newYear + ", " + newMonth + ");' onblur='alert(IndP); if(!IndP) updateDateField(\"a\");'>" + label + "</button>";
}

function getDateString(dateVal)
{
	var dayString = "00" + dateVal.getDate();
	var monthString = "00" + (dateVal.getMonth()+1);
	dayString = dayString.substring(dayString.length - 2);
	monthString = monthString.substring(monthString.length - 2);
	
	switch (dateFormat) {
	case "dmy" :
	return dayString + dateSeparator + monthString + dateSeparator + dateVal.getFullYear();
	case "ymd" :
	return dateVal.getFullYear() + dateSeparator + monthString + dateSeparator + dayString;
	case "mdy" :
	default :
	return monthString + dateSeparator + dayString + dateSeparator + dateVal.getFullYear();
	}
}


function getFieldDate(dateString)
{
	var dateVal;
	var dArray;
	var d, m, y;
	
	try {
	dArray = splitDateString(dateString);
	if (dArray) {
	switch (dateFormat) {
	case "dmy" :
	d = parseInt(dArray[0], 10);
	m = parseInt(dArray[1], 10) - 1;
	y = parseInt(dArray[2], 10);
	break;
	case "ymd" :
	d = parseInt(dArray[2], 10);
	m = parseInt(dArray[1], 10) - 1;
	y = parseInt(dArray[0], 10);
	break;
	case "mdy" :
	default :
	d = parseInt(dArray[1], 10);
	m = parseInt(dArray[0], 10) - 1;
	y = parseInt(dArray[2], 10);
	break;
	}
	dateVal = new Date(y, m, d);
	} else if (dateString) {
	dateVal = new Date(dateString);
	} else {
	dateVal = new Date();
	}
	} catch(e) {
	dateVal = new Date();
	}
	
	return dateVal;
}


function splitDateString(dateString)
{
	var dArray;
	if (dateString.indexOf("/") >= 0)
	dArray = dateString.split("/");
	else if (dateString.indexOf(".") >= 0)
	dArray = dateString.split(".");
	else if (dateString.indexOf("-") >= 0)
	dArray = dateString.split("-");
	else if (dateString.indexOf("\\") >= 0)
	dArray = dateString.split("\\");
	else
	dArray = false;
	
	return dArray;
}

function updateDateField(dateFieldName, dateString)
	{
	var targetDateField = document.getElementsByName (dateFieldName).item(0);
	if (dateString)
	{
		targetDateField.value = dateString;
		setChamp(targetDateField.id,targetDateField.value)
	}
	var pickerDiv = document.getElementById(datePickerDivID);
	//alert(pickerDiv);
	pickerDiv.style.visibility = "hidden";
	pickerDiv.style.display = "none";
	
	adjustiFrame();
	targetDateField.focus();
	
	if ((dateString) && (typeof(datePickerClosed) == "function"))
	datePickerClosed(targetDateField);
}


function adjustiFrame(pickerDiv, iFrameDiv)
	{
	var is_opera = (navigator.userAgent.toLowerCase().indexOf("opera") != -1);
	if (is_opera)
	return;
	
	try {
	if (!document.getElementById(iFrameDivID)) {
	var newNode = document.createElement("iFrame");
	newNode.setAttribute("id", iFrameDivID);
	newNode.setAttribute("src", "javascript:false;");
	newNode.setAttribute("scrolling", "no");
	newNode.setAttribute ("frameborder", "0");
	document.body.appendChild(newNode);
	}
	
	if (!pickerDiv)
	pickerDiv = document.getElementById(datePickerDivID);
	if (!iFrameDiv)
	iFrameDiv = document.getElementById(iFrameDivID);
	
	iFrameDiv.style.position = "absolute";
	iFrameDiv.style.width = pickerDiv.offsetWidth;
	iFrameDiv.style.height = pickerDiv.offsetHeight ;
	iFrameDiv.style.top = pickerDiv.style.top;
	iFrameDiv.style.left = pickerDiv.style.left;
	iFrameDiv.style.zIndex = pickerDiv.style.zIndex - 1;
	iFrameDiv.style.visibility = pickerDiv.style.visibility ;
	iFrameDiv.style.display = pickerDiv.style.display;
     
	} 
	catch (ee) {
	}

}

function addEvent( obj, type, fn ) {
if ( obj.attachEvent ) {
obj['e'+type+fn] = fn;
obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
obj.attachEvent( 'on'+type, obj[type+fn] );
} else
obj.addEventListener( type, fn, false );
}

function cacher(){
	if(!IndP)
   if (document.getElementById(datePickerDivID)!=null)
   {
	   document.getElementById(datePickerDivID).style.visibility="hidden";
	   document.getElementById(datePickerDivID).style.display="none";
	   adjustiFrame();
   }
}

document.onmousedown = cacher;


