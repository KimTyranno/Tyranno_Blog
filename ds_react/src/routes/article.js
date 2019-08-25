import React from 'react';
import { Route } from 'react-router-dom';
import { Section } from 'components';
import { NavLink } from 'react-router-dom';
import "scss/main.scss";

const Article = (props) => {
    const liList = props.mainData.subMenu.map((item, i) => (
        <li key={i} className="main__item">
            <NavLink to={{
                pathname: item.path,
                state: [
                    {
                        title: item.board.title,
                        content: item.board.content
                    }
                ]
            }} activeStyle={{
                'backgroundColor': '#333',
                'color': 'white'
            }}>{item.name}</NavLink>
        </li>
    ));
    return (
        <article>
            <div className="main">
                <Route path="/" component={Section} />
                {/* <Section
                    title={props.mainData.title}
                    content={props.mainData.content}>
                </Section> */}
                <article>
                    <div className="main__content main__content--blue">
                        <div className="main__searchBox">
                            <input type="text" placeholder="검색어를 입력해주세요." />
                            <a href="search"><i className="fas fa-search fa-lg"></i></a>
                        </div>
                        <div className="main__title">
                            menus of item1
                        </div>
                        <ul className='main__list'>
                            {liList}
                        </ul>
                    </div>
                </article>
            </div>
        </article >
    );
}

export default Article;