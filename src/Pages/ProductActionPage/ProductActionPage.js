import React, { Component } from 'react';
import createHistory from "history/createBrowserHistory"

const history = createHistory()

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: true

        };

    }
    componentWillMount() {
        if (this.props.data.params.id) {
            this.setState({
                id: this.props.updateProduct.id,
                name: this.props.updateProduct.name,
                price: this.props.updateProduct.price,
                status: this.props.updateProduct.status
            })
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            id: '',
            name: '',
            price: '',
            status: true
        });
        history.goBack();
    }

    goBack = () => {
        history.goBack();
    }

    render() {
        return (

            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text"
                            className="form-control"
                            onChange={this.onChange}
                            name="name"
                            value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="text"
                            className="form-control"
                            onChange={this.onChange}
                            name="price"
                            checked={this.state.price}
                            value={this.state.price} />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                onChange={this.onChange}
                                name="status"
                                checked={this.state.status} />
                            In Stock
                   </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <span onClick={this.goBack} className="btn btn-danger ml-10">Go Back</span>
                </form>

            </div>

        );
    }


}

export default ProductActionPage;
