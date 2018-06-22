import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        path: '/',
        exact: true
    },
    {
        name: 'Products',
        path: '/product-list',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    )
}


class Menu extends Component {

    showMenu = (menus) => {
        var result = null;

        if (menus.length > 0) {
            result = menus.map((menu, index) => { 
                return (
                    <MenuLink 
                    key = {index}
                    to = {menu.path}
                    label ={menu.name}
                    activeOnlyWhenExact = {menu.exact}
                    ></MenuLink>
                )
            })

            return result;
        }
    }
    render() {

        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" >CALL API</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
}

export default Menu;
