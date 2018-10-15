import React from 'react';
import { Link } from 'react-router-dom'
import '../style/style.css';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className='navigation'>
                    <div className='container'>
                            <ul className='navigation-menu'>
                                <li><Link to='/'>My Tasks</Link></li>
                                <li><Link to='/about'>About Vue.Js</Link></li>
                            </ul>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;