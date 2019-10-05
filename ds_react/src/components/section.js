import React from 'react';
const Section = ({ location }) => {
    return (
        <div className="main">
            <section>
                <div className="main__content main__content--section main__content--red">
                    <div className="main__title">
                        {location.state ? location.state[0].title : '메인페이지'}
                    </div>
                    <div>
                        {location.state ? location.state[0].content : 'Tyranno\'s_BLOG 입니다!'}
                    </div>
                </div>
            </section>
            <article>
                <div className="main__content">
                    <div className="main__searchBox">
                        <input type="text" placeholder="검색어를 입력해주세요." />
                        <a href="search"><i className="fas fa-search fa-lg"></i></a>
                    </div>
                    <div className="main__title">
                        {/* {menuName} */}
                    </div>
                    <ul className='main__list'>
                        {/* {subMenuList} */}
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default Section;