import React, { Component } from 'react';

// 사용자 정의태그 Subject를 만듦
// react에서 사용자 정의태그는 Component라고 한다.
class Subject extends Component {

    // render()함수를 정의
    render() {
        return (
            <header>
                <h1><a href="/" onClick={function (event) {
                    event.preventDefault();
                    this.props.onClick();
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}
            </header >
        );
    }
}

class TOC extends Component {
    render() {
        var i = 0;
        var list = []
        // TOC태그에 있는 data속성의 값을 가져옴
        while (i < this.props.data.length) {
            var data = this.props.data[i];
            list.push(
                /* 
                  React에서는 자동으로 태그를 생성할때 각각의 태그를 구분할 수 있도록
                  key라는 특수한 속성에 고유한값을 부여해줘야 한다.
                */
                <li key={i}>
                    <a href={data.id + '.html'} onClick={function (id, event) {
                        // onClick에서 onclick이 아닌 onClick인것에 주의!

                        // 함수의 첫번째 인자로 event객체가 들어온다.
                        // 클릭시 이동을 금지시킨다.
                        event.preventDefault();

                        // bind를 사용하므로써 this를 함수밖에 있는 this로 인식시킨다.(없으면 undefined)
                        // bind에서 두번째 인자값으로 data.id를 줌으로써 현재 있는 함수의 첫번째인자로 받을 수 있다.
                        this.props.onSelected(id);
                    }.bind(this, data.id)} >{data.title}</a>
                </li>
            );
            i++;
        }
        // var list = [
        //   <li><a href="1.html">HTML</a></li>,
        //   <li><a href="2.html">CSS</a></li>,
        //   <li><a href="3.html">Javascript</a></li>
        // ];
        return (
            <nav>
                <ol>
                    {list}
                </ol>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.data.title}</h2>
                {this.props.data.desc}
            </article>
        );
    }
}

class ContentCreate extends Component {
    state = {
        title: '',
        desc: ''
    }

    changeFormHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <article>
                <form onSubmit={function (event) {
                    event.preventDefault();
                    this.props.onSubmit(this.state);
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="제목" value={this.state.title}
                        onChange={this.changeFormHandler.bind(this)} /></p>
                    <p><textarea name="desc" placeholder="내용" value={this.state.desc}
                        onChange={this.changeFormHandler.bind(this)} /></p>
                    <p><input type="submit" /></p>
                </form>
            </article>
        );
    }
}
class App extends Component {
    last_content_id = 3;
    // state라는건 약속되어 있는 키워드이다.
    // 이걸 TOC태그에 전달할거임
    state = {
        mode: 'read',
        selected_content_id: 2,
        contendsEx: [
            { id: 1, title: "HTML", desc: "HTML is info" },
            { id: 2, title: "CSS", desc: "CSS is info" },
            { id: 3, title: "Javascript", desc: "Javascript is inter" }
        ]
    }

    // Content태그에 selected_content_id에 따라 데이터를 보여준다
    getSelectedContent() {
        for (var i = 0; i < this.state.contendsEx.length; i++) {
            var data = this.state.contendsEx[i];
            if (this.state.selected_content_id === data.id) {
                return data;
            }
        }
    }

    getContentComponent() {
        if (this.state.mode === 'read') {
            return <Content data={this.getSelectedContent()}></Content>
        } else if (this.state.mode === 'Welcome') {
            return <Content data={{
                title: 'WELCOME!!!',
                desc: 'Hello, React !!!'
            }}></Content>
        } else if (this.state.mode === 'create') {
            return <ContentCreate onSubmit={function (data) {
                console.log(data.title, data.desc);
                this.last_content_id += 1;
                data.id = this.last_content_id;
                // 이유는 아직 모르겠는데, 빈 객체에 복사하여 추가 (Object.assign()사용)
                // 배열로 사용하고 있으므로 assign에 첫번째인자로 객체{}가 아닌, 배열[]로 준다.
                var newContent = Object.assign([], this.state.contendsEx);
                newContent.push(data);
                this.setState({
                    contendsEx: newContent,
                    selected_content_id: this.last_content_id,
                    mode: 'read'
                })
            }.bind(this)}></ContentCreate>
        }
    }

    getControlComponent() {
        return [
            <a key='1' href="/create" onClick={function (event) {
                event.preventDefault();
                this.setState({
                    mode: 'create'
                })
            }.bind(this)}>Create</a>,
            <a key='2' href="/update" onClick={function (event) {
                event.preventDefault();
            }.bind(this)}> Update</a>,
            <input key='3' type="button" value="delete" onClick={function () {
                var newContents = this.state.contendsEx.filter(function (el) {
                    if (el.id !== this.state.selected_content_id) {
                        return el;
                    }
                }.bind(this));
                this.setState({
                    contendsEx: newContents,
                    mode: 'Welcome'
                })
            }.bind(this)} />,
        ];
    }
    render() {
        return (
            <div className="App">
                <Subject onClick={function () {
                    this.setState({
                        mode: 'Welcome'
                    })
                }.bind(this)} title="WEB" sub="World Wide Web"></Subject>
                <TOC onSelected={function (id) {
                    // this.state.selected_content_id = id;라고 쓰면 될줄 알았는데,
                    // 쓰기를 할땐 (값을 변경할땐) 무조건 this.setState({})라고 써서 객체로 할당해줘야 한다.
                    this.setState({
                        selected_content_id: id,
                        mode: 'read'
                    });
                }.bind(this)} data={this.state.contendsEx}></TOC>
                {this.getControlComponent()}
                {this.getContentComponent()}
            </div>
        );
    }
}

export default App;
