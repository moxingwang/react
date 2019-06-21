import React, {Component} from "react";
import {HashRouter, Route} from "react-router-dom";
import {Menu,Icon,Calendar} from 'antd';
import FetchRequestTable from './../fetch/FetchRequestTable';
import ReactDOM from "react-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Index extends Component {
    state = {
        current: 'FetchRequestTable',
    }

    handleClick = (e) => {
        console.log('click ', e);

        this.setState({
        current: e.key,
        });
    }

    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="FetchRequestTable">
                        <Icon type="mail"/>FetchRequestTable
                    </Menu.Item>

                    <Menu.Item key="app">
                        <Icon type="appstore"/>Navigation Two
                    </Menu.Item>

                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting"/>Navigation Three - Submenu</span>}>
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>


                {this.state.current == 'FetchRequestTable'?<FetchRequestTable name={"name"}/> :'22'}

            </div>

        );
    }

}


class AppRouterMain extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/" exact component={Index}/>
                    <Route path="/FetchRequestTable/" component={FetchRequestTable}/>
                </div>
            </HashRouter>
        );
    }
}


export default AppRouterMain;