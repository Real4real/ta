import React, { Component } from 'react';
import './aside-component.scss';
import Service from '../../../service';
import Spiner from '../spiner/spiner.jsx';
import AsideItems from '../aside-items/aside-items.jsx'

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

    render() {
        const { getProducts } = this.service;
        const brandList = (
            <AsideItems
                getData={getProducts}
            />
        );
        const productTypeList = (
            <AsideItems
                getData={getProducts}
            />
        );
        const categoryList = (
            <AsideItems
                getData={getProducts}
            />
        );

        return (

            <Asside brands={brandList} productType={productTypeList} category={categoryList}/>
            )
    }
}
