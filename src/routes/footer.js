import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "scss/footer.scss";
export class footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            condition: false // 사이트맵 클릭유무
        }
    }
    handleClick = () => {
        this.setState({
            condition: !this.state.condition
        });
    }
    render() {
        const { condition } = this.state;
        return (
            <footer>
                <div>
                    <a href={void (0)} onClick={this.handleClick}>사이트맵</a>
                    <Link to={{
                        pathname: '/setting',
                        state:
                        {
                            admin: this.props.admin
                        }

                    }}>관리자 설정</Link>
                </div>
                <label>Copyright 2019. DS. ALL RIGHTS RESERVED</label>
                <div className={`footer__siteMap siteMap ${condition ? 'footer--overlay' : ''}`}>
                    <a href="javascript:void(0)" className="footer__closeBtn" onClick={this.handleClick}>&times;</a>
                    <h1>사이트맵</h1>
                    <div className="siteMap__nav">
                        <ul>
                            <li onClick={this.handleClick}>
                                <Link to={{
                                    pathname: "/IT",
                                    state: [
                                        {
                                            viewMode: 0
                                        }
                                    ]
                                }}>
                                    <div>
                                        <i className="fas fa-laptop-code fa-lg"></i>
                                    </div>
                                    <label>IT</label>
                                </Link>
                            </li>
                            <li onClick={this.handleClick}>
                                <Link to={{
                                    pathname: "/IT/0",
                                    state: [
                                        {
                                            viewMode: 0
                                        }
                                    ]
                                }}>
                                    <div>
                                        <i className="fab fa-java fa-lg"></i>
                                    </div>
                                    <label>Java</label>
                                </Link>
                            </li>
                            <li onClick={this.handleClick}>
                                <Link to={{
                                    pathname: "/IT/1",
                                    state: [
                                        {
                                            viewMode: 1
                                        }
                                    ]
                                }}>
                                    <div>
                                        <i className="fab fa-js-square fa-lg"></i>
                                    </div>
                                    <label>Javascript</label>
                                </Link>
                            </li>
                            <li onClick={this.handleClick}>
                                <Link to={{
                                    pathname: "/IT/2",
                                    state: [
                                        {
                                            viewMode: 1
                                        }
                                    ]
                                }}>
                                    <div>
                                        <i className="fab fa-react fa-lg"></i>
                                    </div>
                                    <label>React</label>
                                </Link>
                            </li>
                            <li onClick={this.handleClick}>
                                <Link to={{
                                    pathname: "/IT/3",
                                    state: [
                                        {
                                            viewMode: 1
                                        }
                                    ]
                                }}>
                                    <div>
                                        <i className="fab fa-html5 fa-lg"></i>
                                    </div>
                                    <label>HTML5</label>
                                </Link>
                            </li>
                            <li onClick={this.handleClick}>
                                <Link to={{
                                    pathname: "/IT/4",
                                    state: [
                                        {
                                            viewMode: 1
                                        }
                                    ]
                                }}>
                                    <div>
                                        <i className="fab fa-css3 fa-lg"></i>
                                    </div>
                                    <label>CSS3</label>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li onClick={this.handleClick}>
                                <Link to="/gallery">
                                    <div>
                                        <i className="far fa-images fa-lg"></i>
                                    </div>
                                    <label>갤러리</label>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default footer
