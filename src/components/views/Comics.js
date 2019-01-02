import React from 'react';
import {Link, Route} from "react-router-dom";

function Comics({ match }) {
    return (
        <div>
            <h2>Comics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/comic-strips`}>Short Comic Strips</Link>
                </li>
                <li>
                    <Link to={`${match.url}/rodent-comic`}>Rodents Comic</Link>
                </li>
                <li>
                    <Link to={`${match.url}/relive-comic`}>reLive Comic</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:comicId`} component={Comic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a Comic.</h3>}
            />
        </div>
    );
}

function Comic({ match }) {
    return (
        <div>
            <h3>{match.params.comicId}</h3>
        </div>
    );
}

export default Comics;