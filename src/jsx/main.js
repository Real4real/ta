import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './component/header.jsx'
import BodyComponent from './component/body-component/body-component.jsx'
// import Body2 from './component/body-component/body2.jsx'
import AsideComponent from './component/aside-component/aside-component.jsx';

export default class Main extends Component {
    render() {
        return (
            <div >
                <Header />
                <BodyComponent />
                <AsideComponent />
                
            </div>
        )
    }
}
ReactDOM.render(<Main/>, document.getElementById('root'))
