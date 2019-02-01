//console.log("Events is loaded");

// jQuery(document).ready(function() {
//
//     jQuery(".hit-favorites").on("click",addFavorite);
//
// });
//
//
// function addFavorite( ){
//
//     var clickedPluginId = jQuery(this).attr("id");
//     // console.log(clickedPluginId);
//      console.log("runAjax");
//
//     jQuery.ajax({
//         method: "GET",
//         url: "/projetsoc/pluginFinder/index.php",
//         dataType: "json",
//         data: 'action=API/addFavorite/'+clickedPluginId+'/weglotname',
//         success: function(data) {
//
//             jQuery('#'+clickedPluginId).replaceWith( "<div>Added</div>" );
//             console.log(data);
//
//
//             //called when successful
//             console.log("SUCCESS");
//         },
//         error: function(e) {
//             console.log(e);
//             console.log('ERROR');
//         }        // url: "/projetsoc/pluginFinder/index.php",
//     })
//
//
//
// }