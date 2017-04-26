import React from 'react';
import {Link} from 'react-router';
import { observer } from 'mobx-react';
import Autosuggest from 'react-autosuggest';

@observer(['state'])
class Create extends React.Component
{
  static css()
  {
    return `

    `;
  }
  constructor(){
    super();
  }
  productChange(product, field, event){
    product[field] = event.target.value;
  }
  handleAdd(){
    this.props.state.addProduct();
  }
  handleRemove(product){
    product.destroy();
  }
  componentDidMount() {
    this.props.state.fetchProducts();
  }
  render() {
    let { newOrder } = this.props.state;
    let self = this;
    return (
      <div>
        <Link to="/orders" className="btn btn-info">Back to Orders</Link>
        <div>Other stuff goes here</div>
        <h3>Products</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td></td>
                <td>Product Number</td>
                <td>Description</td>
                <td>Quantity</td>
                <td>Unit Cost</td>
                <td>Line Total</td>
              </tr>
            </thead>
            <tbody>
              {
                newOrder.products.map((product, index) => {
                  return(
                    <tr key={index}>
                      <td><button className="btn btn-danger fa fa-trash-o" onClick={self.handleRemove.bind(self, product)}></button></td>
                      <td>
                        <Autosuggest
                          suggestions={suggestions}
                          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                          getSuggestionValue={getSuggestionValue}
                          renderSuggestion={renderSuggestion}
                          inputProps={inputProps}
                        />
                      </td>
                      <td><input value={product.description} onChange={self.productChange.bind(self, product, 'description')} className="form-control" /></td>
                      <td><input value={product.pcs} onChange={self.productChange.bind(self, product, 'pcs')} className="form-control" /></td>
                      <td><input value={product.price} onChange={self.productChange.bind(self, product, 'price')} className="form-control" /></td>
                      <td>{product.total}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <button className="btn btn-success" onClick={this.handleAdd.bind(this)}>Add</button>
        </div>
        <div>Buttons</div>
        <div>preview</div>
      </div>
    )
  }
}

export default Create;
