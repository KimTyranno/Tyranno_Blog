import React from 'react';
import { Section, ItemList } from 'components';
import "scss/main.scss";

const Article = (props) => {
    // ul태그 클래스명
    const ulClassName = "main__list";
    // ll태그 클래스명
    const liClassName = "main__item";
    return (
        <article>
            <div class="main">
                <Section
                    title={props.mainData.title}
                    content={props.mainData.content}>
                </Section>
                <article>
                    <div class="main__content main__content--blue">
                        <div class="main__searchBox">
                            <input type="text" placeholder="검색어를 입력해주세요." />
                            <a href="search"><i class="fas fa-search fa-lg"></i></a>
                        </div>
                        <div class="main__title">
                            menus of item1
                        </div>
                        <ItemList
                            ulClassName={ulClassName}
                            items={props.mainData.ulData}
                            liClassName={liClassName}>
                        </ItemList>
                    </div>
                </article>
            </div>
        </article >
    );
}

export default Article;