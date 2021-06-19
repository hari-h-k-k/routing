import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(<ul>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
        <Link to='/about'>About</Link>
        </li>
    </ul>)

};
export default NavBar;