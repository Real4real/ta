import React, { Component } from 'react'
import SwapiService from '../../../../../fetch/src/swapi-service.js'

export default class AsideItems extends Component {
    service = new SwapiService();
    state = {
        data: null
    }

    componentDidMount() {
        let uniqarr2;
        let aray = [];

        this.service.getResource()
            .then((data) => {
                data.map((bb) => {
                    const label = this.props.renderItem(item);
                    
                    aray.push({label})

                    const uniqarr = new Set(aray)
                    uniqarr2 = [...uniqarr]
                })
                this.setState(() => {
                    return { data: uniqarr2 }
                })
                // console.log(uniqarr2)

            })    
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
