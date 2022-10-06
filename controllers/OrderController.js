 /////////////////////////////////////////////////////////////FOR JSON FILE OPERATIONS
import OrderDAL from '../services/database/orderDAL.js'
const orderDAL = new OrderDAL();
export default class OrderController{
    async getOrder(req, res){
        let orderData = await orderDAL.getOrders();
        return res.send(orderData);
    }
    async postOrder(req, res){
        let data = req.body;
        orderDAL.postOrder(data);
        let orderData = await orderDAL.getOrders();
        return res.send(orderData)
    }
    async updateOrder(req, res){
        let data = req.body;
        orderDAL.updateOrder(data);
        let orderData = await orderDAL.getOrders();
        return res.send(orderData)
    }
    async deleteOrder(req, res){
        let data = req.body;
        orderDAL.deleteOrder(data);
        let orderData = await orderDAL.getOrders();
        return res.send(orderData)
    }
}




/* /////////////////////////////////////////////////////////////FOR JSON FILE OPERATIONS
import FileOperation from "../services/fileIO/fileio.js";
const fileIO = new FileOperation();
export default class OrderController{
    async getOrder(req, res){
        let fileData = await fileIO.getOrders();
        return res.send(fileData);
    }
    async postOrder(req, res){
        let data = req.body;
        fileIO.postOrder(data);
        let fileData = await fileIO.getOrders();
        return res.send(fileData);
    }
    async updateOrder(req, res){
        let data = req.body;
        fileIO.updateOrder(data);
        let fileData = await fileIO.getOrders();
        return res.send(fileData);
    }
    async deleteOrder(req, res){
        let data = req.body;
        fileIO.deleteOrder(data);
        let fileData = await fileIO.getOrders();
        return res.send(fileData);
    }
} */

