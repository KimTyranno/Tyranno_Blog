import React from 'react';

// ul태그와 li태그, a태그를 생성해주는 컴포넌트
/*
    필요한 파라미터
    ulClassName : ul태그의 클래스명
    liClassName : li태그의 클래스명
    items       : li에 들어가는 데이터
    아마 a태그의 href의 파라미터도 추가해야할듯
*/
const itemList = (props) => {
    const liList = props.items.map((item, i) => (
        <li key={i} class={props.liClassName}>
            <a href="test" key={i}>{item.name}</a>
        </li>
    ));
    return (
        <ul class={props.ulClassName}>
            {liList}
        </ul>
    );
}
export default itemList;