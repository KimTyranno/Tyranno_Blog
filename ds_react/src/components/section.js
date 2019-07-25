import React from 'react';
const Section = (props) => {
    return (
        <section>
            <div class="main__content main__content--section main__content--red">
                <div class="main__title">
                    {props.title}
                </div>
                <div>
                    {props.content}
                </div>
            </div>
        </section>
    );
}

export default Section;