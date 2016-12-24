import React from 'react';
import {Link} from 'react-router';
import { observer } from 'mobx-react';

@observer(['state'])
class Orders extends React.Component {
  static css()
  {
    return `
        .orders .orderRow .orderNumber
        {
            font-weight: 900;
        }
        
        .orders .orderRow[data-status="Deleted"] td
        {
            opacity: .2;
        }
        
        .orders .orderRow[data-status="Deleted"] td:first-child
        {
            opacity: 1;
        }
    `;
  }
  componentDidMount() {
    this.props.state.fetchOrders();
  }
  getStatusName(status)
  {
    let statusName = 'Unknown';
    switch(status)
    {
      case 0:
        statusName = 'New';
        break;
      case 1:
        statusName = 'In Production';
        break;
      case 2:
        statusName = 'Completed';
        break;
      case 3:
        statusName = 'Deleted';
        break;
      default:
        statusName = 'Unknown';
    }
    return statusName;
  }
  getStatusHtml(status)
  {
    let statusName = this.getStatusName(status);
    let className = 'default';
    switch(status)
    {
      case 0:
        className = 'info';
        break;
      case 1:
        className = 'warning';
        break;
      case 2:
        className = 'success';
        break;
      case 3:
        className = 'danger';
        break;
      default:
        className = 'default';
    }
    let html = <span className={`label label-${className}`}>{statusName}</span>;
    return html;
  }
  render () {
    let orders = this.props.state.orders;
    let someOrders= orders.slice(0, 10000);
    return (
      <div className="orders">
        <Link to="/orders/create" className="btn btn-info">New Order</Link>
        <table className="table">
          <thead>
            <tr>
              <td>Status</td>
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
              let status = order.t;
              let data = JSON.parse(order.data);
              return (
                <tr className="orderRow" key={order.id} data-status={this.getStatusName(status)}>
                  <td>{this.getStatusHtml(status)}</td>
                  <td>{data.company}</td>
                  <td className="orderNumber" ><Link to={`/orders/${data.ocnr}`}>{data.ocnr}</Link></td>
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
