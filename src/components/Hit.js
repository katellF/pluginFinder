import Config from '../config.js';
import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Highlight} from 'react-instantsearch/dom';


class Hit extends React.Component {

    constructor(props) {
        super(props);
        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
        this.isInFavorites = this.isInFavorites.bind(this);

        this.state = {
            isFavorite: false,
        };
    }


    addFavorite() {
        const {hit} = this.props;
        console.log(this.state.isFavorite);

        fetch(Config.base_url + '/pluginfinder/index.php?action=API/addFavorite' + '/' + hit.id + '/' + encodeURIComponent(hit.name))
            .then(results => results.json())
            .then(() => {
                this.setState((prevState) => {
                    // to add the favorite from the array
                    listFavoritesIds.push(hit.id);
                    return {
                        isFavorite: !prevState.isFavorite
                    };
                });
            })
            .catch((error) => console.error(error));
        console.log(this.state.isFavorite);
    }

    removeFavorite() {
        const {hit} = this.props;
        let isInFavorites = listFavoritesIds.indexOf(hit.id);
        console.log(hit.id);
        fetch(Config.base_url + '/pluginfinder/index.php?action=API/deleteFavorite' + '/' + hit.id + '/' + hit.name)
            .then(results => results.json())
            .then(() => {
                this.setState((prevState) => {
                    // to remove the favorite from the array
                    listFavoritesIds.splice(isInFavorites, 1);
                    return {
                        isFavorite: !prevState.isFavorite
                    };
                });
            })
            .catch((error) => console.error(error));
        console.log(this.state.isFavorite);
    }


    isInFavorites() {
        const {hit} = this.props;
        let isInFavorites = listFavoritesIds.indexOf(hit.id);
        if (isInFavorites > -1) {
            this.state.isFavorite = true;
        }
    }


    // render() {
    //     const {hit} = this.props;
    //
    //     this.isInFavorites();
    //     return (
    //
    //         <div className="hit hitPerso">
    //             <div className="hit__details">
    //                 <div className="hit-image">
    //                     <img width="100" height="100" src={hit.img_thumb} alt="images"/>
    //                 </div>
    //                 <div className="hit-content">
    //                     <div className="hit-name hit__namePerso">
    //                         <Highlight attribute="name" hit={hit}/>
    //                     </div>
    //                     <div className="hit-description hit-descriptionPerso">
    //                         <div dangerouslySetInnerHTML={{ __html: hit.short_description }}></div>
    //                         {/*<Highlight attribute="short_description" hit={hit}/>*/}
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className={"buttons_block d-flex flex-column align-items-center"}>
    //                 {isUserConnected
    //                     ? ( this.state.isFavorite ? (<p className={"hit_center"}>
    //                                 <button onClick={this.removeFavorite}
    //                                         className="hit__add hit--addLink"
    //                                         data-id={hit.id} data-name={encodeURIComponent(hit.name)} id={hit.id}>Remove
    //                                 </button>
    //                             </p>)
    //                             : (<p className={"hit_center"}>
    //                                 <button onClick={this.addFavorite}
    //                                         className="hit__add hit--addLink"
    //                                         data-id={hit.id} data-name={hit.name} id={hit.id}>Add to favorites
    //                                 </button>
    //                             </p>)
    //                     ) : (<p className="hit_center hit_buttonBlue"><a href="index.php?action=connect/redirect"
    //                                                                      className={"hit__add"}>Add to Favorites</a>
    //                     </p>)
    //                 }
    //
    //                 <p className="hit_center hit_buttonGrey"><a href={hit.plugin_page_at_source} target="_blank"
    //                                                             className="hit__moreInfo hit--moreInfoLink">More
    //                     Info</a></p>
    //             </div>
    //
    //         </div>
    //
    //     );
    // }

    render() {
        const {hit} = this.props;

        this.isInFavorites();
        return (

            <div className="hit hitPerso">
                <div className="hit__details">
                    <div className="hit-image">
                        <img width="100" height="100" src={hit.img_thumb} alt="images"/>
                        {isUserConnected
                            ? ( this.state.isFavorite ? (<p className={"hit_center"}>
                                        <button onClick={this.removeFavorite}
                                                className="hit__add hit--addLink tooltip" type="button"
                                                data-id={hit.id} data-name={encodeURIComponent(hit.name)} id={hit.id}>
                                            <FontAwesomeIcon className={'button_heartRemove fa-2x'}
                                                             icon="heart"
                                            title={"Remove from your Favorite"}
                                            />
                                            

                                        </button>
                                    </p>)
                                    : (<p className={"hit_center"}>
                                        <button onClick={this.addFavorite}
                                                className="hit__add hit--addLink tooltip" type="button"
                                                data-id={hit.id} data-name={hit.name} id={hit.id}>
                                            <FontAwesomeIcon className={'button_heartAdd fa-2x'}
                                                             icon="heart"
                                            />
                                        </button>
                                    </p>)
                            ) : (<p><a type="button" data-toggle="tooltip" data-placement="right" data-html="true" title="add to your favorite" href="index.php?action=connect/redirect">
                                <FontAwesomeIcon className={'icon_heart'}
                                                 icon="heart"
                                />
                            </a>
                            </p>)
                        }
                    </div>
                    <div className="hit-content">
                        <div className="hit-name hit__namePerso">
                            <Highlight attribute="name" hit={hit}/>
                        </div>
                        <div className="hit-description hit-descriptionPerso">
                            <div dangerouslySetInnerHTML={{ __html: hit.short_description }}></div>
                            {/*<Highlight attribute="short_description" hit={hit}/>*/}
                        </div>
                    </div>
                </div>
                <div className={"buttons_block d-flex flex-column align-items-center"}>
                    <p className="hit_center hit_buttonGrey">
                        <a href={hit.plugin_page_at_source} target="_blank" className="hit__moreInfo hit--moreInfoLink">More Info</a>
                    </p>



                </div>

            </div>

        );
    }
}

export default Hit;


