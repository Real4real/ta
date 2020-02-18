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
                <p className="menu-label">
                    Brands
                </p>
                {brands}

                <p className="menu-label">
                    Product Type
                </p>
                {productType}

                <p className="menu-label">
                    Category
                </p>
                {category}
            </ul>
        </aside>
    )
};
export default class AsideComponent extends Component {
    service = new Service();
    state = {
        brand: "?brand",
        productType: "?product_type",
        category: "?product_category"
    }
    componentDidMount() {
        this.setState((state) => {
            return { brand: state.brand + "=almay"}
        })
        
    }
    render() {
        const { brand } = this.state;

        console.log(brand)

        const { getProductTypes, getBrands, getCategory} = this.service;
        const brandList = (
            <AsideItems
                getData={getBrands}
            />
        );
        const productTypeList = (
            <AsideItems
                getData={getProductTypes}
            />
        );
        const categoryList = (
            <AsideItems
                getData={getCategory}
            />
        );

        return (

            <Asside brands={brandList} productType={productTypeList} category={categoryList} />
            )
    }
}
