import React, { Component } from 'react';
import './aside-items.scss';
import Service from '../../../service.js';
import Spiner from '../spiner/spiner.jsx';

export default class AsideItems extends Component {
    service = new Service();
    state = {
        data: null
    };

    componentDidMount() {

        const { getData } = this.props;

        // this.service.getProducts()
        // getData()
        //     .then((data) => {
        //     this.setState({data})
        // })
        
        getData()
            .then((data) => {
                this.setState({
                    data
                })
            });
    }

    // renderItems(arr) {
    //     return arr.map((item) => {
    //         return (
    //             <li key={item}><a>{item}</a></li>
    //         )
    //     })
    // }
    renderItems(arr) {
        return arr.map((item) => {
            return (
                <li key={item}><a>{item}</a></li>
            );
        });
    }

    render() {
        const { data } = this.state;

        if (!data) {
            return <Spiner />
        }

        const items = this.renderItems(data)

        return (
            <li>
                <ul className="lorem-cont">
                    {items}
                </ul>
            </li>
        )
    }
}
