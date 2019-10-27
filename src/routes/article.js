import React from 'react';
import { Route } from 'react-router-dom';
import { Section, Gallery, Setting, Edit, Programing } from 'components';
import { Switch } from 'react-router-dom';
import "scss/main.scss";

const Article = (props) => {
    // var subMenuList = [];
    // if (props.mainData.subMenu !== undefined) {
    //     subMenuList = props.mainData.subMenu.map((item, i) => (
    //         <li key={i} className="main__item">
    //             <NavLink to={{
    //                 pathname: item.path,
    //                 state: [
    //                     {
    //                         title: item.board.title,
    //                         content: item.board.content
    //                     }
    //                 ]
    //             }} activeStyle={{
    //                 'backgroundColor': '#333',
    //                 'color': 'white'
    //             }}>{item.name}</NavLink>
    //         </li>
    //     ));
    // }

    // const menuName = props.mainData.name;
    const menuInfo = props.menuInfo;
    return (
        <article>
            <Route path="/" exact component={Section} />
            <Switch>
                <Route path="/gallery/:viewMode" component={Gallery} />
                <Route path="/gallery" component={Gallery} />
            </Switch>
            <Switch>
                <Route path="/IT/:subMenu" render={(props) => <Programing {...props} menuInfo={menuInfo} />} />
                <Route path="/IT" render={(props) => <Programing {...props} menuInfo={menuInfo} />} />
            </Switch>
            <Switch>
                <Route path="/setting/edit" component={Edit} />
                <Route path="/setting" component={Setting} />
            </Switch>
        </article >
    );
}

export default Article;