import {Layout, Table} from 'antd';
import React, {Component} from 'react';
import 'antd/dist/antd.css';

const {Header, Content, Footer, Sider} = Layout;

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '54325',
    age: 42,
    address: '435'
}, {
    key: '2',
    name: '543',
    age: 42,
    address: '54'
}, {
    key: '2',
    name: 'fsd',
    age: 42,
    address: 'sf'
}
];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

class FetchRequestTable extends Component {
    constructor(prop){
        super(prop)
        console.log("FetchRequestTable create")
    }

    render() {
        return (
            <Table dataSource={dataSource} columns={columns} bordered={true}/>
        );
    }
}

export default FetchRequestTable;
