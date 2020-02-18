export default class Service {
    _apiBase = 'https://makeup-api.herokuapp.com/api/v1/products.jso321n';

    // getResource = async () => {
    //     const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`)
    //     return res.json()
        
    // };
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getProductTypes = async () => {
            let uniqarr22;
            let aray2 = [];
            const res = await this.getResource(`?product_type=`);
                res.map((bb) => {

                    aray2.push(bb.product_type)

                    const uniqarr = new Set(aray2)
                    
                    uniqarr22 = [...uniqarr]
            })
                return (uniqarr22)
                // console.log(uniqarr22)
    };
    getBrands = async () => {
            let uniqarr22;
            let aray2 = [];
            const res = await this.getResource(`?brand=`);
                res.map((bb) => {

                    aray2.push(bb.brand)

                    const uniqarr = new Set(aray2)
                    
                    uniqarr22 = [...uniqarr]
            })
                return (uniqarr22)
                // console.log(uniqarr22)
    };
    getCategory = async () => {
            let uniqarr22;
            let aray2 = [];
            const res = await this.getResource(`?category=`);
                res.map((bb) => {

                    aray2.push(bb.category)

                    const uniqarr = new Set(aray2)
                    
                    uniqarr22 = [...uniqarr]
            })
                return (uniqarr22)
                // console.log(uniqarr22)
    };

    getAllProducts = async () => {
        const res = await this.getResource();
        // .map(this._transformPerson)
        return res
                .map((bb) => {
                    let uniqarr22;
                    let aray2 = [];
                    aray2.push(bb.product_type)

                    const uniqarr = new Set(aray2)

                    uniqarr22 = [...uniqarr]
                })
                
                // console.log(uniqarr22)



    };

    _transformProducts = () => {
        return {
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };
    
}



const service = new Service();

// service.getResource()
//     .then((body) => {
//         body.map((bb) => {
//             aray.push(bb.brand)

//             const uniqarr = new Set(aray)
//             uniqarr2 = [...uniqarr]
//         })
//         console.log(uniqarr2)
        
//     })

// service.getProducts()
//     .then((body) => {
//     console.log(body)
// })
// service.getProducts().then((body) => {
//     console.log(body)
// })
// service.getAllProducts()



// service.getResource2()
//     .then((body) => {
//     console.log(body)
// })

    
