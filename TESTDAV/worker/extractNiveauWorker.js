var dateChargement = new Date();

$(document).mousemove(function(event){
    dateChargement = new Date();
});

function extractNiveau() {

    dateActuelle = new Date();
    tempsEcoule = Date.daysBetween(dateChargement, dateActuelle);
    if (tempsEcoule > 10) {
        location.replace('index?Deconnexion=true');
    }

    try {
        $.ajax({
            type: "POST",
            url: "../VerifNiveauServlet",
            data: "",
            success: function(response) {
                var niveau = response;
                if (niveau === "2") {
                    $(".MenuBody #02").show();
                } else {
                    $(".MenuBody #02").hide();
                }
                setTimeout(function() {
                    extractNiveau();
                }, 1000);

            },
            error: function(e) {

            }
        });
    } catch (e) {
        logErreurs(e);
    }
}

Date.daysBetween = function(date1, date2) {

        //Get 1 min in milliseconds
        var one_minute = 1000 * 60;
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
        // Convert back to days and return
        difference = difference_ms / one_minute;
        return difference;
    }

extractNiveau();