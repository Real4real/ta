import React, { Component } from 'react';
import './aside-component.scss';
import Service from '../../../service';
import Spiner from '../spiner/spiner.jsx';
import AsideItems from '../aside-items/aside-items.jsx'
import BodyComponent from '../body-component/body-component.jsx';

const Asside = ({ brands, productType, category, bodyCompBrand, bodyCompCategory, bodyCompProductType, }) => {
    return (
        <div className="root-grid-container">
            <aside className="menu">
            <ul className="menu-list">
                <p className="menu-label">
                    Brands
                </p>
                {brands}
            </ul>

            <ul className="menu-list">
                <p className="menu-label">
                    Product Type
                </p>
                {productType}
            </ul>
                
            <ul className="menu-list">
                <p className="menu-label">
                    Category
                </p>
                {category}
            </ul>
            </aside>

            {bodyCompBrand}
            {bodyCompCategory}
            {bodyCompProductType}
        </div>
    )
};
export default class AsideComponent extends Component {
    service = new Service();
    state = {
        selectedItem: null,
        selectBrand: "?brand=",
        selectProductType: "?product_type=",
        selectCategory: "?category=",
    }
    onItemSelected=(item)=>{
        this.setState({
            selectedItem: item
        })
        console.log(item)
    };
    // onItemSelectedBrand = (item) => {
    //     this.setState((state) => {
    //         return {selectBrand: state.selectBrand + item}
    //     })
    // };
    // onItemSelectedProductType=(item)=>{
    //     this.setState((state) => {
    //         return {selectProductType: state.selectProductType + item}
    //     })
    // };
    // onItemSelectedCategory=(item)=>{
    //     this.setState((state) => {
    //         return {selectCategory: state.selectCategory + item}
    //     })
    // };
    // componentDidMount() {
    //     this.setState((state) => {
    //         return { brand: state.brand + "=almay"}
    //     })
        
    // }
    render() {
        const { getProductTypes, getBrands, getCategory, getExactBrand, getExactCategory, getExactProductType} = this.service;
        const brandList = (
            <AsideItems
                getData={getBrands}
                onItemClick={this.onItemSelected}
            />
        );
        const productTypeList = (
            <AsideItems
                getData={getProductTypes}
                onItemClick={this.onItemSelected}
            />
        );
        const categoryList = (
            <AsideItems
                getData={getCategory}
                onItemClick={this.onItemSelected}
            />
        );
        const bodyComponentBrand = (
            <BodyComponent
                itemId={this.state.selectedItem}
                dataGet={getExactBrand}
            />
        );
        const bodyComponentProductType = (
            <BodyComponent
                itemId={this.state.selectedItem}
                dataGet={getExactProductType}
            />
        );
        const bodyComponentCategory = (
            <BodyComponent
                itemId={this.state.selectedItem}
                dataGet={getExactCategory}
            />
        );

        return (

            <Asside brands={brandList} 
                    productType={productTypeList} 
                    category={categoryList} 
                    bodyCompBrand={bodyComponentBrand} 
                    bodyCompCategory={bodyComponentProductType} bodyCompProductType={bodyComponentCategory}
            />
        )
    }
}
