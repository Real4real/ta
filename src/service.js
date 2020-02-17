export default class Service {
    getResource = async () => {
        const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json`)
        return res.json()
        
    };
    
}
// const arr = [
//     { name: "as"},
//     { name: "fsa"},
//     { name: "as"},
//     { name: "123"},
//     { name: "as"},
// ];
// const arr = [1, 10, 10, 2, 22, 3, 1, 2, 3, 6, 7];
// const uniqarr = new Set(arr)
// const uniqarr2 = [...uniqarr]
// console.log(uniqarr2)


const service = new Service();

let uniqarr2;
let aray=[];
service.getResource()
    .then((body) => {
        body.map((bb) => {
            aray.push(bb.brand)

            const uniqarr = new Set(aray)
            uniqarr2 = [...uniqarr]
        })
        console.log(uniqarr2)
        
    })

    
