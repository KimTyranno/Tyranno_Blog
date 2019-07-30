import React from 'react';
import { Header, Nav, Article } from './routes';
import "scss/common.scss";
function App() {
  const mainData = {
    contentsEx: [
      { path: '/', title: '메인페이지', content: 'Tyranno\'s_BLOG 입니다!' },
      { path: '/item1', title: 'item1', content: 'item1의 화면' },
      { path: '/item2', title: 'item2', content: 'item2의 화면' },
      { path: '/item3', title: 'item3', content: 'item3의 화면' },
      { path: '/item4', title: 'item4', content: 'item4의 화면' }
    ],
    subMenu: [
      { name: "subItem1" },
      { name: "subItem2" },
      { name: "subItem3" },
      { name: "subItem4" }
    ]
  }


  const navData = {
    items: [
      { name: "item1" },
      { name: "item2" },
      { name: "item3" },
      { name: "item4" }
    ]
  }
  return (
    <div className="App">
      <Header item={mainData.contentsEx[0]}></Header>
      <Nav items={navData.items} linkData={mainData.contentsEx}></Nav>
      <Article mainData={mainData}></Article>
    </div>
  );
}

export default App;
