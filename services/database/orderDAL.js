import orderDB from './dbserver.js';

export default class OrderDAL{
    getOrders(){
        return new Promise((resolve) => {
            let searchQuery = "SELECT * FROM `orders`";
            orderDB.query(searchQuery, (err, result)=>{
                if(err){
                    throw err;
                } else{
                    resolve(result);
                }
            })
        })
    }

    postOrder(data){
        let insertCmd = "INSERT INTO `orders` (product_id, user_id, order_payment, order_status) VALUES (?, ?, ?, ?)";
        let insertQuery = orderDB.format(insertCmd, [data.product_id, data.user_id, data.order_payment, data.order_status]);
        orderDB.query(insertQuery, (err, result)=>{
            if(err) throw err;
        })
    }

    updateOrder(data){
        let updateQuery = `UPDATE orders SET product_id = ${data.product_id}, user_id = ${data.user_id}, order_payment = ${data.order_payment}, order_status = '${data.order_status}' WHERE order_id = ${data.order_id}`; 
        orderDB.query(updateQuery, (err, result)=>{
            if(err) throw err;
        })
    }

    deleteOrder(data){
        let deleteQuery = `DELETE FROM orders WHERE order_id = ${data.order_id}`
        orderDB.query(deleteQuery, (err, result)=>{
            if(err) throw err;
        })
    }
}