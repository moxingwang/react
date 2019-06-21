import React, {Component} from "react";
import QueryParamButton from './QueryParamButton'
import {Table} from "antd";

const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
}, {
    title: '订单号',
    dataIndex: 'serialNumber',
    key: 'serialNumber',
}, {
    title: '订单类',
    dataIndex: 'orderTypeDesc',
    key: 'orderTypeDesc',
}, {
    title: '创建时间',
    dataIndex: 'createDate',
    key: 'createDate',
}, {
    title: '购买人',
    dataIndex: 'userName',
    key: 'userName',
}, {
    title: '手机号',
    dataIndex: 'mobile',
    key: 'mobile',
}, {
    title: '订单应付',
    dataIndex: 'payableAmount',
    key: 'payableAmount',
}, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
}
];


class UnpaidOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }

    componentDidMount() {
        fetch("http://longguo.uat1.rs.com/api-bill-b/orderApi/bpc/order/list/all/?currentPage=1&showCount=10&pageName=QUERY_PAID", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": "3fc02a24-44e0-42ba-b23e-c0fdbd1442ea",
                "shopId": "37696",
                "shopStatus": "1"
            },
            body: '{"serialNumber":"","mobile":"","orderStatus":"","channel":"","deliverStatus":"","startDate":"","endDate":""}'
        }).then(res => res.json())
            .then(data => {
                console.log(data)

                dataSource: data.data.data.map(p => p.key = p.id);

                this.setState({dataSource: data.data.data})
            })
            .catch(e => console.log('请求接口错误:', e));
    }

    render() {
        return (
            <div>
                <QueryParamButton placeholderName={"请输入检索条件"}/>
                <Table dataSource={this.state.dataSource} columns={columns} bordered={true}/>
            </div>
        );
    }
}


export default UnpaidOrder;