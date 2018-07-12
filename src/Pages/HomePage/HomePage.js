import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <form>
                    <legend>Login</legend>

                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label for="">UserName</label>
                                <input type="text" className="form-control" placeholder="Input field" name ="username"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="form-group">
                                <label for="">Password</label>
                                <input type="password" className="form-control" placeholder="Input field" name ="password"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default HomePage;
