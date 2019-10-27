import React from 'react';

const Section = ({ location }) => {
    return (
        <div className="main">
            <section>
                <div className="main__content main__content--section">
                    <div className="main__title">
                        {location.state ? location.state[0].title : '메인페이지'}
                    </div>
                    <div>
                        {location.state ? location.state[0].content : 'Tyranno\'s_BLOG 입니다!'}
                    </div>
                </div>
            </section>
            <article>
                <div className="main__sideMenu">
                    <div className="main__searchBox">
                        <input type="text" placeholder="검색어를 입력해주세요." />
                        <a href="search"><i className="fas fa-search fa-lg"></i></a>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Section;