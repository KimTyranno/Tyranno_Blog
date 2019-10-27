import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Markup } from 'interweave';
import "scss/programing.scss";

class Programing extends Component {
    constructor(props) {
        super(props);
        var { java_items } = require('test.json');
        const { it } = this.props.menuInfo;
        const subMenuList = it.subMenu.map((item, i) => (
            <li key={item.name} className="main__item">
                <NavLink to={{
                    pathname: `/IT${item.path}`,
                    state: [
                        {
                            viewMode: 0
                        }
                    ]
                }} activeStyle={{
                    'backgroundColor': '#333',
                    'color': 'white'
                }}>
                    <div>
                        <i className={`fab ${item.iconName} fa-lg`}></i>
                    </div>
                    <label>{item.name}</label>
                </NavLink>
            </li>
        ));
        this.state = {
            java_items,
            subMenuList
        };
        // this.handleHover = this.handleHover.bind(this);
        // <Markup content={data} />
    }

    render() {
        const java = this.state.java_items[0];
        const { subMenuList } = this.state;
        return (
            <div className="main">
                <section>
                    <div className="main__sort">정렬</div>
                    <div className='main__content main__content--section'>
                        <div className="main__thumbnail">

                        </div>
                        <div className="main__postInfo">
                            <div className="main__title">
                                {java.title}
                            </div>
                            <div className="main__etc">
                                <div className="main__etc__date">
                                    <i className="far fa-calendar-alt"></i>
                                    {java.date}
                                </div>
                                <div className="main__etc__comment">
                                    <i className="fas fa-comments"></i>
                                    0
                                    </div>
                            </div>
                            <div className="main__previewText">
                                {java.content}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='main__content main__content--section'>
                        <div className="main__thumbnail">

                        </div>
                        <div className="main__postInfo">
                            <div className="main__title">
                                타이틀
                                </div>
                            <div className="main__etc">
                                <div className="main__etc__date">
                                    <i className="far fa-calendar-alt"></i>
                                    2019.10.06
                                    </div>
                                <div className="main__etc__comment">
                                    <i className="fas fa-comments"></i>
                                    0
                                    </div>
                            </div>
                            <div className="main__previewText">
                                모든 국민은 양심의 자유를 가진다. 국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.
                                연소자의 근로는 특별한 보호를 받는다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 국회의원과 정부는 법률안을 제출할 수 있다.
                                공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다.
                                국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지 아니한다.
                                </div>
                        </div>
                    </div>
                    <hr />
                </section>
                <article>
                    <div className="main__sideMenu">
                        <div className="main__searchBox">
                            <input type="text" placeholder="검색어를 입력해주세요." />
                            <a href="search"><i className="fas fa-search fa-lg"></i></a>
                        </div>
                        <div className="main__sideMenu__title">
                            IT
                        </div>
                        <ul className='main__list'>
                            {subMenuList}
                        </ul>
                    </div>
                </article>
            </div>
        );
    };
}

export default Programing;