import React from 'react';
import { Header, Nav, Article, Footer } from './routes';
import "scss/common.scss";
class App extends React.Component {

  constructor(props) {
    super(props);
    const menuInfo = require('menuInfo.json');
    this.state = {
      menuInfo
    }
  }

  render() {
    const mainData = {
      contentsEx: [
        { path: '/', title: '메인페이지', content: 'Tyranno\'s_BLOG 입니다!' }
      ]
    };

    const { menuInfo } = this.state;
    return (
      <div className="App">
        <Header item={mainData.contentsEx[0]}></Header>
        <Nav
          items={menuInfo}
        ></Nav>
        <Article menuInfo={menuInfo}></Article>
        <Footer menuInfo={menuInfo}></Footer>
      </div >
    );
  }
}


export default App;
