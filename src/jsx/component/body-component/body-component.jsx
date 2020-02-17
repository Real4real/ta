import React, { Component } from 'react'
import './body-component.scss'
import Service from '../../../service'
import Spiner from '../spiner/spiner.jsx'
import Pagination from '../pagination/pagination.jsx'

export default class BodyComponent extends Component {
    service = new Service();
    state = {
        data: null,
        currentPage: 1,
        postsPerPage: 10,
    }
    // componentDidMount() {
    //     this.service.getResource()
    //         .then((data) => {
    //             this.setState({
    //                 data
    //             })
    //         })

    // }


    // renderItems(arr) {
    //     return arr.map((item) => {
    //         const { id } = item
    //         return (
    //             <div className="card" key={id}>
    //                 <div className="card-image-container">
    //                     <img src={item.image_link} alt="cat" />
    //                 </div>
    //                 <div className="card-text-field-container">
    //                     <p className="title is-3">{item.name}</p>
    //                     <p className="subtitle is-5">{item.brand}</p>
    //                     <p className="subtitle is-5">{item.price}{item.price_sign}</p>
    //                     <p className="subtitle is-6">
    //                         {item.description}
    //                     </p>
                        
    //                     <a href={item.product_link} className="fsa">
    //                         <button className="button is-link">Buy</button>
    //                     </a>

    //                 </div>
    //             </div>
    //         );
    //     })
    // }

    onPaginate = (number) => {
        this.setState({
            currentPage: number
        })
    }
    render() {
        // const { data, currentPage, postsPerPage } = this.state;
        // if (!data) {
        //     return <Spiner/>
        // }

        // const indexOfLastPost = currentPage * postsPerPage;
        // const indexOfFirstPost = indexOfLastPost - postsPerPage;

        // const items = this.renderItems(data);
        // const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <div className="body-cont">
                <div className="main-cnt">
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
