

console.log("Events is loaded");


jQuery(document).ready(function() {

    jQuery("#weglot").on("click",executeAjax);

});

function executeAjax(){

    console.log("runAjax");

    jQuery.ajax({
        method: "GET",
        url: "/projetsoc/pluginFinder/index.php",
        dataType: "json",
        data: 'action=API/addFavorite/weglot9/weglotname',
        success: function(data) {
            console.log(data);
            //called when successful
            console.log("SUCCESS");
        },
        error: function(e) {
            console.log(e);
            console.log('ERROR');
            //called when there is an error
            //console.log(e.message);
        }        // url: "/projetsoc/pluginFinder/index.php",
//        dataType: "script"
    })
        // .done(function( msg ) {
        //     console.log(msg);
        //     alert( "Data Saved: " + msg );
        // });

    // jQuery.get("/projetsoc/pluginFinder/index.php?action=API/add/weglot/weglotname", function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status);
    // });



}