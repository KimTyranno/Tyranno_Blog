import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import "scss/setting.scss";

class Setting extends Component {
    constructor(props) {
        super(props);

        var admin;
        props.location.state === undefined ? admin = 0 : admin = props.location.state;
        // 로그인 하는거 만들어야함
        this.state = {
            admin: admin
        };
    }

    render() {
        const admin = this.state;
        return (
            <div className="main">
                {admin === undefined || admin === 0 && <Redirect to="/"></Redirect>}
                <section className="setting">
                    <div>
                        <a href="#" className="">
                            <i class="fas fa-sitemap fa-4x"></i>
                            <label>카테고리 편집</label>
                        </a>
                    </div>
                    <div>
                        <Link to='/setting/edit'>
                            <i class="fas fa-edit fa-4x ml-15"></i>
                            <label>글 작성</label>
                        </Link>
                    </div>
                </section>
            </div >
        );
    };
}

export default Setting;