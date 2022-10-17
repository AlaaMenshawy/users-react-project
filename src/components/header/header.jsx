import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div>
            <div className='top-widget'></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='https://picsum.photos/100/50' />
                    </a>
                </div>
            </nav>

        </div>
    );
}

export default Header;