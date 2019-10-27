import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "scss/footer.scss";
export class footer extends Component {
    constructor(props) {
        super(props);

        const menuInfo = this.props.menuInfo;
        const ulList = [];
        for (var itemKey in menuInfo) {
            ulList.push(
                <ul key={itemKey}>
                    <li onClick={this.handleClick}>
                        <Link to={menuInfo[itemKey].path}>
                            <div>
                                <i className={`${menuInfo[itemKey].iconName} fa-lg`}></i>
                            </div>
                            <label>{menuInfo[itemKey].name}</label>
                        </Link>
                    </li>

                    {menuInfo[itemKey].subMenu.map((item, i) => (
                        <li key={item.name} onClick={this.handleClick}>
                            <Link to={`/IT${item.path}`}>
                                <div>
                                    <i className={`fab ${item.iconName} fa-lg`}></i>
                                </div>
                                <label>{item.name}</label>
                            </Link>
                        </li>))}
                </ul>
            );
        }
        this.state = {
            condition: false, // 사이트맵 클릭유무
            username: null,
            ulList
        }
    }

    // 관리자 설정메뉴 표시하기 위한 처리 (그냥 윈도우계정이름이 있으면 서버 돌리는상태니까 관리자상태라는 가정)
    componentDidMount() {
        fetch('/getUserName')
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
    }

    handleClick = () => {
        this.setState({
            condition: !this.state.condition
        });
    }

    render() {
        const { condition, username, ulList } = this.state;
        return (
            <footer>
                <div>
                    <div className="divBtn" onClick={this.handleClick}>사이트맵</div>
                    {username ?
                        <Link to={{
                            pathname: '/setting',
                            state:
                            {
                                admin: this.props.admin
                            }

                        }}>관리자 설정</Link>
                        : ""}
                </div>
                <label>Copyright 2019. DS. All Rights Reserved</label>
                <div className={`footer__siteMap siteMap ${condition ? 'footer--overlay' : ''}`}>
                    <div className="divBtn footer__closeBtn" onClick={this.handleClick}>&times;</div>
                    <h1>사이트맵</h1>
                    <div className="siteMap__nav">
                        {ulList}
                    </div>
                </div>
            </footer>
        )
    }
}

export default footer
