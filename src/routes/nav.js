import React from 'react';
// import ItemList from 'components/itemList';
import { NavLink } from 'react-router-dom';
import "scss/nav.scss";
const Nav = (props) => {
    // ul태그 클래스명
    const ulClassName = "nav__list";
    // ll태그 클래스명
    const liClassName = "nav__item";
    const liList = [];
    for (var itemKey in props.items) {
        liList.push(<li key={itemKey} className={liClassName}>
            <NavLink
                to={props.items[itemKey].path}
                activeStyle={{
                    'color': '#9ae8f1'
                }}>
                {props.items[itemKey].name}
            </NavLink>
        </li>);
    }

    return (
        <div className="nav">
            {/* <ItemList
                ulClassName={ulClassName}
                liClassName={liClassName}
                items={props.items}
                onSelected={props.onSelected}
            ></ItemList> */}
            <ul className={ulClassName}>
                {liList}
            </ul>
        </div>
    );
}

// 테스트용으로 props 기본값 만드는거 해본거임
Nav.defaultProps = {
    items: [
        { name: "item01" },
        { name: "item02" },
        { name: "item03" }
    ]
}
export default Nav;