import React, { Component } from 'react';
import './aside-component.scss';
import Service from '../../../service.js';
import Spiner from '../spiner/spiner.jsx'

const Asside = ({ brands, productType, category }) => {
    return (
        <aside className="menu">
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                {brands}
                {productType}
                {category}
            </ul>
        </aside>
    )
};
export default class AsideComponent extends Component {
    service = new Service();
    // state = {
    //     brands: null,
    // }
    componentDidMount() {
        // this.service.getResource()
        //     .then((data) => {
        //         data.map((bb) => {
                    
        //             aray.push(bb.brand)

        //             const uniqarr = new Set(aray)
        //             uniqarr2 = [...uniqarr]
        //         })
        //         this.setState(() => {
        //             return {data: uniqarr2}
        //         })
        //     })


        // WORK<<<<<<<<<<
        // let uniqarr2;
        // let aray = [];
        // this.service.getResource()
        //     .then((brands) => {
        //         brands.map((bb) => {
        //             aray.push(bb.brand)

        //             const uniqarr = new Set(aray)
        //             uniqarr2 = [...uniqarr]
        //         })
        //         this.setState(() => {
        //             return { brands:uniqarr2}
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
        // const { brands } = this.state;
        // if (!brands) {
        //     return <Spiner />
        // }
        
        // const items = this.renderItems(brands)

        const brandList = (
            <AsideItems

            />
        );
        const productTypeList = (
            <AsideItems

            />
        );
        const categoryList = (
            <AsideItems

            />
        );

        return (

            <Asside brands={brandList} productType={productTypeList} category={categoryList}/>
            // <aside className="menu">
            //     <p className="menu-label">
            //         General
            //     </p>
            //     <ul className="menu-list">
            //         <li><a>Dashboard</a></li>
            //         <li><a>Customers</a></li>
            //     </ul>
            //     <p className="menu-label">
            //         Administration
            //     </p>
            //     <ul className="menu-list">
            //         <li>
            //             <a>Brands</a>
            //             <ul className="lorem-cont">
            //                 {items}
            //             </ul>
            //         </li>
            //         <li>
            //             <a>Manage Your Team</a>
            //             <ul>
            //                 <li><a>Members</a></li>
            //                 <li><a>Plugins</a></li>
            //                 <li><a>Add a member</a></li>
            //             </ul>
            //         </li>
            //         <li><a>Invitations</a></li>
            //         <li><a>Cloud Storage Environment Settings</a></li>
            //         <li><a>Authentication</a></li>
            //     </ul>
            //     <p className="menu-label">
            //         Transactions
            //     </p>
            //     <ul className="menu-list">
            //         <li><a>Payments</a></li>
            //         <li><a>Transfers</a></li>
            //         <li><a>Balance</a></li>
            //     </ul>
            // </aside>
            )
    }
}
