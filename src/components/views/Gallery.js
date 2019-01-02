import React from 'react';
import {Link, Route} from 'react-router-dom';

function Gallery({ match }) {
        return (
            <div>
                <h2>Gallery</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/sketchbook`}>SketchBook</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/deviantart`}>deviantArt</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/instagram`}>Instagram</Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:categoryId`} component={Category} />
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a Category.</h3>}
                />
            </div>
        );
}

function Category({ match }) {
    return (
        <div>
            <h3>{match.params.categoryId}</h3>
        </div>
    );
}

export default Gallery;