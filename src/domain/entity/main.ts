import Address from "./address";
import Customer from "./customer";
import Order from "./order";
import OrderItem from "./order_item";

let customer = new Customer("123", "Lorena Andrade")
const address = new Address("Rua Major Deocleciano", 58, "45.204-092", "Jequié")
customer.Address  = address

const item1 = new OrderItem("1", "Item 1", 10, "i1", 1)
const item2 = new OrderItem("2", "Item 2", 60, "i2", 2)
const order = new Order("1", "123", [item1, item2])


