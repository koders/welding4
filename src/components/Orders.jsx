import React from 'react';
import { observer } from 'mobx-react';

@observer(['state'])
class Orders extends React.Component {
  static css()
  {
    return `

    `;
  }
  componentDidMount() {
    this.props.state.fetchOrders();
  }
  render () {
    let orders = this.props.state.orders;
    let someOrders= orders.slice(0, 10);
    return (
      <div className="orders">
        <button className="btn btn-info w-m">New Order</button>
        <table className="table">
          <thead>
            <tr>
              <td>Company</td>
              <td>Order Number</td>
              <td>Order date</td>
              <td>Delivery date</td>
              <td>Total amount</td>
            </tr>
          </thead>
          <tbody>
          {
            someOrders.map((order) => {
              let data = JSON.parse(order.data);
              return (
                <tr key={order.id}>
                  <td>{data.company}</td>
                  <td>{data.ordernr}</td>
                  <td>{data.odate}</td>
                  <td>{data.ddate}</td>
                  <td>{data.tot}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Orders;
