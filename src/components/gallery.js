import React, { Component } from 'react';
import { GridLayout, JustifiedLayout } from "@egjs/react-infinitegrid";
import { NavLink } from 'react-router-dom';
import "scss/gallery.scss";

class Item extends Component {
    render() {
        return (
            <div
                className={`gallery__img wow ${this.props.viewMode === 0 ? 'gallery--horizen fadeInUp' : 'gallery--vertical bounceInRight'}`}
                onClick={this.props.onClick}>
                <img
                    alt="사진임"
                    className={`${this.props.viewMode !== 0 && 'gallery--widthFull'}`}
                    src={`${this.props.viewMode === 0 ?
                        `https://picsum.photos/225/${this.props.height}` :
                        `https://picsum.photos/${this.props.height}/225`}`} />
            </div>
        );
    }
}
class Gallery extends Component {
    constructor(props) {
        super(props);

        this.loading = (<div className="loading">Loading...</div>);
        this.start = 0;

        var viewMode;
        // '/gallery'로 url에 직접쳐서 들어오면 갤러리의 기본 표시형식을 GridLayout (가로형식)으로 설정
        if (props.match.params === null || props.match.params.viewMode === undefined) {
            viewMode = 0;
            props.location.pathname = "/gallery/0";
        } else {
            viewMode = parseInt(props.match.params.viewMode);
        }
        this.state = {
            loading: null,
            galleryList: [],
            viewMode: viewMode// viewMode가 0이면 GridLayout, 1이면 JustifiedLayout
        };
    }

    /*
        컴포넌트 생성후에 첫 렌더링을 마친 후 호출되는 메서드다.
        컴포넌트가 처음 마운트 되는 시점에서는 호출되지 않는다.
        props를 받아서 state를 변경해야 하는 경우 유용하다.
        이 메소드 내부에서 setState를 사용해도 추가적인 렌더링이 발생하지 않는다.
    */
    componentWillReceiveProps(nextProps) {
        var newViewMode = nextProps.match.params.viewMode;
        var { viewMode } = this.state;
        // 
        if (newViewMode !== undefined && viewMode !== parseInt(newViewMode)) {
            this.setState({
                viewMode: parseInt(newViewMode)
            })
            window.location.reload();
        }
        // 가로형식이나 세로형식이 선택된 상태에서 갤러리버튼 눌러도 버튼이 그 상태를 유지하도록함
        viewMode === 0 ? nextProps.location.pathname = "/gallery/0" : nextProps.location.pathname = "/gallery/1";
    }
    // componentDidMount() {
    //     this.getImage();
    // };

    // getImage = async () => {
    //     var randomValue = 0;
    //     const items = [];
    //     for (var i = 0; i < 30; i++) {
    //         randomValue = Math.floor(Math.random() * 400) + 100;
    //         // const item = await axios.get(`https://picsum.photos/235/${randomValue}`);
    //         items.push(
    //             <div className="gallery__img">
    //                 <img alt="사진임" src={`https://picsum.photos/235/${randomValue}`} />
    //             </div>
    //         );
    //     }
    //     var galleryList = this.state.galleryList;
    //     this.setState({
    //         galleryList: galleryList.concat(items)
    //     })
    // };
    loadItems(groupKey, num) {
        const items = [];
        const start = this.start || 0;
        for (let i = 0; i < num; ++i) {
            var randomValue = Math.floor(Math.random() * 400) + 100;
            items.push(
                <Item
                    groupKey={groupKey}
                    num={start + i}
                    key={start + i}
                    onClick={(itemKey => (e => this.remove(itemKey)))(start + i)}
                    height={randomValue}
                    viewMode={this.state.viewMode} />);
        }
        this.start = start + num;
        return items;
    }
    remove(itemKey) {
        const galleryList = this.state.galleryList.slice();
        const index = galleryList.map(component => parseFloat(component.key)).indexOf(itemKey);

        // console.log(itemKey, index);
        galleryList.splice(index, 1);
        this.setState({ galleryList });
    }
    onAppend = ({ groupKey }) => {
        const galleryList = this.state.galleryList;
        const items = this.loadItems(parseFloat(groupKey || 0) + 1, 5);

        this.setState({ loading: true, galleryList: galleryList.concat(items) });
    }
    onLayoutComplete = ({ isLayout, endLoading }) => {
        !isLayout && endLoading();
    };

    selectedViewMode() {
        var viewMode = this.state.viewMode;
        const { galleryList } = this.state;
        // GridLayout 모드로 설정
        if (viewMode === 0) {
            return <GridLayout
                tag="div"
                threshold={100}
                useFit={true}
                isEqualSize={false}
                useRecycle={true}
                transitionDuration={0.5}
                margin={10}
                onAppend={this.onAppend}
                onLayoutComplete={this.onLayoutComplete}>

                {galleryList}
            </GridLayout>
        } else {
            // JustifiedLayout 모드로 설정
            return <JustifiedLayout
                tag="div"
                threshold={100}
                useFit={true}
                isEqualSize={false}
                useRecycle={true}
                transitionDuration={0.5}
                margin={10}
                onAppend={this.onAppend}
                onLayoutComplete={this.onLayoutComplete}
                column={[0, 5]}>

                {galleryList}
            </JustifiedLayout>
        }
    }
    render() {
        return (
            <div className="main gallery">
                <section>
                    <div className="gallery__selectView">
                        <NavLink to={{
                            pathname: "/gallery/0",
                            state: [
                                {
                                    viewMode: 0
                                }
                            ]
                        }} activeStyle={{
                            'color': 'black'
                        }}>
                            <div>
                                <i className="fas fa-grip-vertical fa-lg"></i>
                            </div>
                            <span>테트리스 형식</span>
                        </NavLink>
                        <NavLink to={{
                            pathname: "/gallery/1",
                            state: [
                                {
                                    viewMode: 1
                                }
                            ]
                        }} activeStyle={{
                            'color': 'black'
                        }}>
                            <div>
                                <i className="fas fa-grip-horizontal fa-lg"></i>
                            </div>
                            <span>벽돌 형식</span>
                        </NavLink>
                    </div>
                    <div className="gallery__content">
                        {this.selectedViewMode()}
                    </div>
                </section>
                <article>
                    <div className="main__sideMenu">
                        <div className="main__searchBox">
                            <input type="text" placeholder="검색어를 입력해주세요." />
                            <a href="search"><i className="fas fa-search fa-lg"></i></a>
                        </div>
                        <div className="main__sideMenu__title">
                            갤러리
                        </div>
                        <ul className='main__list'>
                            <li className="main__item">

                            </li>
                            <li className="main__item">

                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        );
    };
}

export default Gallery;