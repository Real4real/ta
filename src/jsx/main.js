import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './component/header.jsx'
export default class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}
ReactDOM.render(<Main/>, document.getElementById('root'))
