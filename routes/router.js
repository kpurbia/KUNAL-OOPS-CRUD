import OrderController from '../controllers/OrderController.js'

export default function(app){
    const order = new OrderController();

    app.route("/orders")
        .get(order.getOrder)
        .post(order.postOrder)
        .put(order.updateOrder)
        .delete(order.deleteOrder);
}