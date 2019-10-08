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
            <div>
                <Link to={{
                    pathname: '/setting',
                    state:
                    {
                        admin: props.state.admin
                    }

                }}>관리자 설정</Link>
            </div>
        </header>
    );
}

export default Header;