import React, {Component} from "react";
import {Icon, Menu} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class OrderHeader extends Component {
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
                    onClick={this.props.onClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="unpaid">
                        <Icon type="align-left"/>未付款
                    </Menu.Item>

                    <Menu.Item key="paid">
                        <Icon type="align-center"/>已付款
                    </Menu.Item>


                    <Menu.Item key="refunded">
                        <Icon type="align-right"/>已退款
                    </Menu.Item>

                </Menu>


            </div>

        );
    }
}

export default OrderHeader;