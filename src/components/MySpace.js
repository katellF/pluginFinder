import React, { Component } from "react";



class MySpace extends React.Component {

    constructor(props) {
        super(props);
        this.deletePlugin =  this.deletePlugin.bind(this);
        this.state = {
            data: [],
        };

    }

    // deletePlugin () {
    //     console.log("it works");
    //     this.setState(() => {
    //         return {
    //             data: []
    //         };
    //     });
    //
    // }

    deletePlugin (e) {
        // console.log("it works");
        // this.setState(() => {
        //     return {
        //         data: []
        //     };
        // });
        let clickedPluginId = jQuery(e.currentTarget).data('id');
       // let clickedPluginName = jQuery(e.currentTarget).data('name');
        // console.log(e);

        console.log(clickedPluginId);
       // console.log(clickedPluginName);

        jQuery.ajax({
            method: "GET",
            url: "/projetsoc/pluginFinder/index.php",
            dataType: "json",
            data: 'action=API/deleteFavorite/'+clickedPluginId+'',
            success: function() {
                //console.log("element",e);
                jQuery('#plugin_'+clickedPluginId).remove();
                //jQuery('#toto').remove();


                //this.render();
                console.log("SUCCESS");
                console.log("Ca marche");

            },
            error: function(e) {
                console.log(e);
                console.log('ERROR');
            }
        })


    }


    componentDidMount(){

        fetch('http://localhost:8888/projetsoc/pluginFinder/index.php?action=API/listFavorites')
            .then(results => results.json())
            .then(json => this.setState({data:json}));
    };


    render() {
        //const {fav} =this.props;
       // console.log(this.props.id);

        return (

            <div className={"content_mySpace"}>
                <h1>My Favorites</h1>

                <p>{this.state.data.map((json, index) =>

                    <p key={index} id={`plugin_${json.pluginId}`}>{json.pluginName} --- {json.pluginId}
                    {/*<button key= button_{json.pluginId} onClick={this.deletePlugin} data-id={this.props.id} data-name={this.props.name} >Delete</button>*/}
                    <button key={json.pluginId} onClick={this.deletePlugin} data-id={json.pluginId}>Delete</button>
                    </p>

                       )}</p>

            </div>
        );
    }
}

 export default MySpace;
