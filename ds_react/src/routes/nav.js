import React from 'react';
import ItemList from 'components/itemList';
import { NavLink } from 'react-router-dom';
import "scss/nav.scss";
const Nav = (props) => {
    // ul태그 클래스명
    const ulClassName = "nav__list";
    // ll태그 클래스명
    const liClassName = "nav__item";
    const liList = props.items.map((item, i) => (
        <li key={i} className={liClassName}>
            <NavLink to={{
                pathname: item.path,
                state: [
                    {
                        title: item.board.title,
                        content: item.board.content
                    }
                ]
            }}
                onClick={function (id) {
                    props.onSelected(i);
                }}
                activeStyle={{
                    'color': '#9ae8f1'
                }}>{item.name}</NavLink>
        </li>
    ));
    // 관리자 로그인이 아니면 마지막 요소인 '설정'을 제거
    if (props.state.admin === 0) {
        liList.pop();
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