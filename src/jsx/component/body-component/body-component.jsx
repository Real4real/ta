import React, { Component } from 'react'
import './body-component.scss'
import Service from '../../../service'
import Spiner from '../spiner/spiner.jsx'
import Pagination from '../pagination/pagination.jsx'

export default class BodyComponent extends Component {
    service = new Service();
    state = {
        item: null,
        currentPage: 1,
        postsPerPage: 10,
    }
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }
    updateItem() {
        const { dataGet, itemId } = this.props;
        if (!itemId) {
            return
        }

        dataGet(itemId)
            .then((item) => {
                this.setState({
                    item
                })
            })
    }


    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item
            return (
                <div className="card" key={id}>
                    <div className="card-image-container">
                        <img src={item.image_link} alt="cat" />
                    </div>
                    <div className="card-text-field-container">
                        <p className="title is-3">{item.name}</p>
                        <p className="subtitle is-5">{item.brand}</p>
                        <p className="subtitle is-5">{item.price}{item.price_sign}</p>
                        <p className="subtitle is-6">
                            {item.description}
                        </p>
                        
                        <a href={item.product_link} className="fsa">
                            <button className="button is-link">Buy</button>
                        </a>

                    </div>
                </div>
            );
        })
    }

    onPaginate = (number) => {
        this.setState({
            currentPage: number
        })
    }
    render() {
        const { item, currentPage, postsPerPage } = this.state;
        if (!item) {
            return <p></p>
        }

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;

        const items = this.renderItems(item);
        const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <div className="body-cont">
                <div className="main-cnt">
                    {currentPosts}
                    {/* <div className="card">
                        <div className="card-image-container">
                            <img src='https://purr.objects-us-east-1.dream.io/i/VQKev.png' alt="cat" />
                        </div>
                        <div className="card-text-field-container">
                            <p className="title is-3">Name</p>
                            <p className="subtitle is-5">Brand</p>
                            <p className="subtitle is-5">99$</p>
                            <p className="subtitle is-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ipsam.
                            </p>

                            <a className="fsa">
                                <button className="button is-link">Buy</button>
                            </a>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image-container">
                            <img src='https://purr.objects-us-east-1.dream.io/i/VQKev.png' alt="cat" />
                        </div>
                        <div className="card-text-field-container">
                            <p className="title is-3">Name</p>
                            <p className="subtitle is-5">Brand</p>
                            <p className="subtitle is-5">99$</p>
                            <p className="subtitle is-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ipsam.
                            </p>

                            <a className="fsa">
                                <button className="button is-link">Buy</button>
                            </a>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image-container">
                            <img src='https://purr.objects-us-east-1.dream.io/i/VQKev.png' alt="cat" />
                        </div>
                        <div className="card-text-field-container">
                            <p className="title is-3">Name</p>
                            <p className="subtitle is-5">Brand</p>
                            <p className="subtitle is-5">99$</p>
                            <p className="subtitle is-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ipsam.
                            </p>

                            <a className="fsa">
                                <button className="button is-link">Buy</button>
                            </a>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image-container">
                            <img src='https://purr.objects-us-east-1.dream.io/i/VQKev.png' alt="cat" />
                        </div>
                        <div className="card-text-field-container">
                            <p className="title is-3">Name</p>
                            <p className="subtitle is-5">Brand</p>
                            <p className="subtitle is-5">99$</p>
                            <p className="subtitle is-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ipsam.
                            </p>

                            <a className="fsa">
                                <button className="button is-link">Buy</button>
                            </a>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image-container">
                            <img src='https://purr.objects-us-east-1.dream.io/i/VQKev.png' alt="cat" />
                        </div>
                        <div className="card-text-field-container">
                            <p className="title is-3">Name</p>
                            <p className="subtitle is-5">Brand</p>
                            <p className="subtitle is-5">99$</p>
                            <p className="subtitle is-6">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, ipsam.
                            </p>

                            <a className="fsa">
                                <button className="button is-link">Buy</button>
                            </a>

                        </div>
                    </div> */}
                </div>
                {/* <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={this.onPaginate}
                /> */}
            </div>
            
        )
    }
}
