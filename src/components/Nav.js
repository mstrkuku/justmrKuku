import React, { Component } from 'react';
import { Link } from "react-router-dom";
import constants from '../utils/constants';

class Nav extends Component {
    render() {
        var Navigation = constants.NAV_ARRAY;
        return (
            <div className="nav-view">
                <ul>
                    {Navigation.map(function(navItem){
                        return(
                            <li key={navItem}>
                                <Link to={'/' + navItem} title={navItem}>
                                    {navItem}
                                </Link>
                            </li>
                            )
                    })}
                </ul>
                <hr/>
            </div>
        );
    }
}
export default Nav;