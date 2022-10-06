import fs from 'fs';
const filename = "data.json";

export default class FileOperation {
    getOrders(){
        return new Promise((resolve) => {
            fs.readFile(filename, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    resolve(data);
                }
            })
        })
    }

    postOrder(order){
        fs.readFile(filename, (err, data) => {
            var allOrders = data.toString();
            var ordersArray = JSON.parse(allOrders);
            ordersArray.push(order);
            var orderList = JSON.stringify(ordersArray)
            fs.writeFile(filename, orderList, (err) => {
                if(err) throw err;
            })

        });
    }

    updateOrder(order){
        fs.readFile(filename, (err, data)=>{
            var allOrders = data.toString();
            var ordersArray = JSON.parse(allOrders);
            let filterArray = ordersArray.filter((product)=>(product.id != order.id))
            filterArray.push(order);
            filterArray = JSON.stringify(filterArray)
            fs.writeFile(filename, filterArray, (err)=>{
                if(err) throw err;
            })
        })
    }

    deleteOrder(order){
        fs.readFile(filename, (err, data)=>{
            var allOrders = data.toString();
            var ordersArray = JSON.parse(allOrders);
            let filterArray = ordersArray.filter((product)=>(product.id != order.id))
            console.log(filterArray);
            filterArray = JSON.stringify(filterArray)
            fs.writeFile(filename, filterArray, (err)=>{
                if(err) throw err;
            })
        })
    }
}