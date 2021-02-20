{/* First component */}

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <React.Fragment>
            <h1>Hacker News Clone</h1>
            <div className="nav-link">
                <navlink to="/top" activeClassName="active">
                    Top Stories
                </navlink>

                <navlink to="/new" activeClassName="active">
                    Latest Stories
                </navlink>

                <navlink to="/best" activeClassName="active">
                    Best Stories
                </navlink>
            </div>
        </React.Fragment>
    );
};

export default Header;
