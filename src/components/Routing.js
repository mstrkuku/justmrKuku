import React from 'react';
import { Route } from "react-router-dom";
import Info from "./views/Info";
import Comics from './views/Comics';
import Gallery from "./views/Gallery";
import Request from "./views/Request";

function Routing() {
    return (
        <div>
            <Route exact path="/" component={Info}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/Comics" component={Comics}/>
            <Route path="/request" component={Request}/>
        </div>
    );
}
export default Routing;