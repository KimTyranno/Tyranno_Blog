import React from 'react';
import ItemList from 'components/itemList';
import "scss/nav.scss";
const Nav = (props) => {
    // ul태그 클래스명
    const ulClassName = "nav__list";
    // ll태그 클래스명
    const liClassName = "nav__item";
    return (
        <div className="nav">
            <ItemList
                ulClassName={ulClassName}
                items={props.items}
                liClassName={liClassName}
                linkData={props.linkData}
            ></ItemList>
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