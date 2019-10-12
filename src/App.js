import React from 'react';
import { Header, Nav, Article, Footer } from './routes';
import "scss/common.scss";
class App extends React.Component {
  state = {
    selected_subMenu_id: 0,
    admin: 1 // 관리자 로그인시 1
  }
  render() {
    const mainData = {
      contentsEx: [
        { path: '/', title: '메인페이지', content: 'Tyranno\'s_BLOG 입니다!' }
      ]
    };

    var data = require('./data.json');
    const { menu } = data;

    return (
      <div className="App">
        <Header item={mainData.contentsEx[0]}></Header>
        <Nav
          items={menu}
          state={this.state}
          onSelected={function (id) {
            this.setState({
              selected_subMenu_id: id
            });
          }.bind(this)}></Nav>
        <Article mainData={menu[this.state.selected_subMenu_id]}></Article>
        <Footer admin={this.state}></Footer>
      </div >
    );
  }
}


export default App;
