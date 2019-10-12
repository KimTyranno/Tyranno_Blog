import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "scss/edit.scss";

class edit extends Component {
    render() {
        return (
            <div className="main">
                <section>
                    <CKEditor
                        config={{
                            ckfinder: {
                                // Upload the images to the server using the CKFinder QuickUpload command
                                // You have to change this address to your server that has the ckfinder php connector
                                uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                            }
                        }}
                        editor={ClassicEditor}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </section>
                <article>
                    <div className="main__sideMenu">
                        <div className="main__searchBox">
                            <input type="text" placeholder="검색어를 입력해주세요." />
                            <a href="search"><i className="fas fa-search fa-lg"></i></a>
                        </div>
                        <div className="main__sideMenu__title">
                            설정
                        </div>
                        <ul className='main__list'>
                            <li className="main__item">
                                <NavLink to={{
                                    pathname: "/setting/category",
                                }} activeStyle={{
                                    'backgroundColor': '#333',
                                    'color': 'white'
                                }}>
                                    <div>
                                        <i className="fas fa-sitemap fa-lg"></i>
                                    </div>
                                    <label>카테고리 편집</label>
                                </NavLink>
                            </li>
                            <li className="main__item">
                                <NavLink to={{
                                    pathname: "/setting/edit",
                                }} activeStyle={{
                                    'backgroundColor': '#333',
                                    'color': 'white'
                                }}>
                                    <div>
                                        <i className="fas fa-edit fa-lg"></i>
                                    </div>
                                    <label>글 작성</label>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        )
    }
}

export default edit
