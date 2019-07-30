import React from 'react';
const Section = ({ location }) => {
    return (
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
    );
}

export default Section;