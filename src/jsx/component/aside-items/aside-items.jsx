import React, { Component } from 'react'
import SwapiService from '../../../service.js';
import Spiner from '../spiner/spiner.jsx'

export default class AsideItems extends Component {
    service = new SwapiService();
    state = {
        data: null
    }

    componentDidMount() {
       
        
        // const { getData } = this.props;
        // this.setState({
        //     data: getData
        // })
        // this.service.getResource()
        //     .then((data) => {
        //         data.map((bb) => {

        //             // const { label } = this.props;  
                    
        //             aray.push(bb.brand)

        //             const uniqarr = new Set(aray)
        //             uniqarr2 = [...uniqarr]
        //         })
        //         this.setState(() => {
        //             return { data: uniqarr2 }
        //         })
        //         // console.log(uniqarr2)

        //     })    
    }

    renderItems(arr) {
        return arr.map((item) => {
            return (
                <li key={item}><a>{item}</a></li>
            )
        })
    }

    render() {
        const { data } = this.state;
        console.log(this.props.getData);
        const { getData } = this.props;

        if (!getData) {
            return <Spiner />
        }

        // const items = this.renderItems(this.props.getData)

        return (
            <li>
                <a>Brands</a>
                <ul className="lorem-cont">
                    {items}
                </ul>
            </li>
        )
    }
}
