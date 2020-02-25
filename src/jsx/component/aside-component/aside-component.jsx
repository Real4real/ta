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
        </div>
    )
};
export default class AsideComponent extends Component {
    service = new Service();
    state = {
        selectedItem: null,
        selectBrand: null,
        selectProductType: null,
        selectCategory: null,
    }
    // onItemSelected=(item)=>{
    //     this.setState({
    //         selectedItem: item
    //     })
    //     console.log(item)
    // };

    // componentDidUpdate() {
    //     let a = "f";
    //     switch (a) {
    //         case this.state.selectBrand:
    //             this.setState({selectedItem: selectBrand})
    //             this.bodyData = this.service.getExactBrand
    //             break;
            
    //         case this.state.selectProductType:
    //             this.setState({ selectedItem: selectProductType})
    //             this.bodyData = this.service.getExactProductType;
    //             break;
            
    //         case this.state.selectCategory:
    //             this.setState({ selectedItem: selectCategory})
    //             this.bodyData = this.service.getExactCategory;
    //             break;
        
    //         default:
    //             break;
    //     }
    // }
    onItemSelectedBrand = (item) => {
        this.setState({
            selectedItem: item
        });
        this.bodyData = this.service.getExactBrand;
        
    };
    onItemSelectedProductType=(item)=>{
        this.setState({
            selectedItem: item
        });
        this.bodyData = this.service.getExactProductType;
    };
    onItemSelectedCategory=(item)=>{
        this.setState({
            selectedItem: item
        });
        this.bodyData = this.service.getExactCategory;
    };
    // componentDidMount() {
    //     this.setState((state) => {
    //         return { brand: state.brand + "=almay"}
    //     })
        
    // }
    render() {
        let bodyData;
        const { getProductTypes, getBrands, getCategory, getExactBrand, getExactCategory, getExactProductType} = this.service;
        const brandList = (
            <AsideItems
                getData={getBrands}
                onItemClick={this.onItemSelectedBrand}
            />
        );
        const productTypeList = (
            <AsideItems
                getData={getProductTypes}
                onItemClick={this.onItemSelectedProductType}
            />
        );
        const categoryList = (
            <AsideItems
                getData={getCategory}
                onItemClick={this.onItemSelectedCategory}
            />
        );
        const bodyComponentBrand = (
            <BodyComponent
                itemId={this.state.selectedItem}
                dataGet={this.bodyData}
            />
        );
        // const bodyComponentProductType = (
        //     <BodyComponent
        //         itemId={this.state.selectedItem}
        //         dataGet={getExactProductType}
        //     />
        // );
        // const bodyComponentCategory = (
        //     <BodyComponent
        //         itemId={this.state.selectedItem}
        //         dataGet={getExactCategory}
        //     />
        // );

        return (

            <Asside brands={brandList} 
                    productType={productTypeList} 
                    category={categoryList} 
                    bodyCompBrand={bodyComponentBrand} 
            />
        )
    }
}
