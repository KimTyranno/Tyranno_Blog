import React from 'react';
import { Link } from 'react-router-dom';
// ul태그와 li태그, a태그를 생성해주는 컴포넌트
/*
    필요한 파라미터
    ulClassName : ul태그의 클래스명
    liClassName : li태그의 클래스명
    items       : li에 들어가는 데이터
    {
        name    : 링크이름
        path    : 링크경로
        board
        {
            title    : 제목
            content  : 내용
        }
    }
    아마 a태그의 href의 파라미터도 추가해야할듯
*/
const itemList = (props) => {
    const liList = props.items.map((item, i) => (
        <li key={i} className={props.liClassName}>
            <Link to={{
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
                }}>{item.name}</Link>
        </li>
    ));
    return (
        <ul className={props.ulClassName}>
            {liList}
        </ul>
    );
}
export default itemList;