

console.log("Events is loaded");


jQuery(document).ready(function() {

    jQuery(".hit-favorites").on("click",executeAjax);

});

function executeAjax( ){

    // console.log(el.id);
//    console.log();
    var clickedPluginId = jQuery(this).attr("id");
    console.log(clickedPluginId);

    //console.log(e.attr("id"));
    console.log("runAjax");

    jQuery.ajax({
        method: "GET",
        url: "/projetsoc/pluginFinder/index.php",
        dataType: "json",
        data: 'action=API/addFavorite/'+clickedPluginId+'/weglotname',
        success: function(data) {

            jQuery('#'+clickedPluginId).replaceWith( "<div>Added</div>" );
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