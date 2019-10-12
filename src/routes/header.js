import React from 'react';
import { Link } from 'react-router-dom';
import "scss/header.scss";
const Header = (props) => {
    return (
        <header>
            <Link to={{
                pathname: props.item.path,
                state: [
                    {
                        title: props.item.title,
                        content: props.item.content
                    }
                ]
            }}>DS_BLOG</Link>
        </header>
    );
}

export default Header;