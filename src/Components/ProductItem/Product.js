import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Product extends Component {
    onDelete = () => {
        if (confirm('Do you really want to delete this product')) //eslint-disable-line
        {
            this.props.onDelete(this.props.product);
        }
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.product);
    }
    render() {
        var { product } = this.props;
        var status = product.status;
        var statusClass = status ? 'success' : 'danger';
        var stock = status ? 'In stock' : 'Out Stock';
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>

                    <span className={`label label-${statusClass}`}>{stock}</span>

                </td>
                <td>

                    <Link to={`/product/${product.id}/edit`} type="button" className="btn btn-warning" onClick={this.onUpdate}>Update</Link>

                    <button type="button" className="btn btn-danger ml-10" onClick={this.onDelete}>Delete</button>

                </td>
            </tr>
        );
    }
}

export default Product;
