import React, { Component } from 'react';
import './aside-component.scss';
import Service from '../../../service';
import Spiner from '../spiner/spiner.jsx';
import AsideItems from '../aside-items/aside-items.jsx'
import BodyComponent from '../body-component/body-component.jsx';

const Asside = ({ brands, productType, category, bodyComp }) => {
    return (
        <div className="root-grid-container">
            <aside className="menu">
            <ul className="menu-list">
                <p className="menu-label">
                    Brands
                </p>
                {brands}
            </ul>

            <ul>
                <p className="menu-label">
                    Product Type
                </p>
                {productType}
                </ul>
                
            <ul>
                <p className="menu-label">
                    Category
                </p>
                {category}
            </ul>
            </aside>

            {bodyComp}
        </div>
    )
};
export default class AsideComponent extends Component {
    service = new Service();
    state = {

    }
    onItemSelected=(item)=>{
        
    };
    componentDidMount() {
        this.setState((state) => {
            return { brand: state.brand + "=almay"}
        })
        
    }
    render() {
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
        const bodyComponentBrand = (
            <BodyComponent
                getData={}
            />
        );
        const bodyComponentProductType = (
            <BodyComponent
                getData={}
            />
        );
        const bodyComponentCategory = (
            <BodyComponent
                getData={}
            />
        );

        return (

            <Asside brands={brandList} productType={productTypeList} category={categoryList} bodyComp={bodyComponenta}/>
            )
    }
}
