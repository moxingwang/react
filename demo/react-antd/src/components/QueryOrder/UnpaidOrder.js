import React, {Component} from "react";
import {render} from 'react-dom';
import {Button, Col, Form, Input, Modal, notification, Row, Table, Timeline} from 'antd';
import 'antd/dist/antd.css';
import Fetcher from '../../util/Fetcher';

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
}, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => (
        <ActionComponent text={text} record={record}/>
    )
}
];

class ActionComponent extends Component {
    constructor(props) {
        super();
        this.state = {visible: false};
    }

    handlerDelete = (e) => {
        this.setState({visible: true});
    }

    setModalVisible = (visible) => {
        this.setState({visible: visible});
    }


    handlerNotification = (e) => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    render() {


        return (<div>
                <Modal
                    title="20px to Top"
                    style={{top: 20}}
                    onOk={() => this.setModalVisible(false)}
                    onCancel={() => this.setModalVisible(false)}
                    visible={this.state.visible}>
                    <Timeline pending="Recording..." reverse={true}>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    </Timeline>
                </Modal>

                {
                    this.state.visible ? (
                        null
                    ) : null
                }
                <Button type={'primary'} onClick={this.handlerDelete}>Delete</Button>;
                <Button type={'primary'} onClick={this.handlerNotification}>Notification</Button>;
            </div>
        )

    }
}


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    }
};

class UnpaidOrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
            pageSize: 10,
            total: 0,
            current: 1
        };

    }

    //到时候直接传一个对象进去,封装一个多功能的方法
    //可以定义一套build方法
    fetchData = (requst = {requstParam: {currentPage: 1}, requestBody: {}}) => {
        new Fetcher()
            .withUrl("http://longguo.uat1.rs.com/api-bill-b/orderApi/bpc/order/list/all/?showCount=10&pageName=QUERY_PAID")
            .withParams(requst.requstParam)
            .withBody(requst.requestBody)
            .withMethod("POST")
            .addHeader("x-auth-token", "3fc02a24-44e0-42ba-b23e-c0fdbd1442ea")
            .addHeader("shopId", "37696")
            .addHeader("shopStatus", "1")
            .withDefaultHandleResults("data")
            .build()
            .then((data) => {
                if (data) {
                    dataSource: data.data.map(p => {
                        p.key = p.id;
                    });
                    this.setState({dataSource: data.data, pageSize: data.showCount, total: data.totalResult})
                }
            });

    }


    componentDidMount() {
        this.fetchData();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            console.log(err, values)
            let body = new Object();
            body.serialNumber = values.serialNumber;
            this.fetchData({requstParam: {currentPage: 1}, requestBody: body});
        });
    }

    handleReset = () => {
        this.props.form.resetFields();
        this.fetchData();
    }


    handlePage = (e) => {
        this.setState({current: e});
        console.table(['分页', e, this.state])
        this.fetchData({requstParam: {currentPage: e}});
    }

    render() {
        console.log("渲染数据")
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <div style={{margin: "30px", padding: "20px", border: "2px solid #CCC"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Row span={24}>
                            <Col span={6}>
                                <Form.Item  {...formItemLayout} label={"订单号"}>
                                    {getFieldDecorator('serialNumber', {
                                        rules: [{required: false, message: 'Please input your username!'}],
                                    })(
                                        <Input placeholder="订单号"/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item  {...formItemLayout} label={"客户姓名"}>
                                    {getFieldDecorator('purchaseName', {
                                        rules: [{required: false, message: 'Please input your username!'}],
                                    })(
                                        <Input placeholder="客户姓名"/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item  {...formItemLayout} label={"手机号"}>
                                    {getFieldDecorator('mobile', {
                                        rules: [{required: false, message: 'Please input your username!'}],
                                    })(
                                        <Input placeholder="手机号"/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item   {...formItemLayout} label={"创建人"}>
                                    {getFieldDecorator('createUserName', {
                                        rules: [{required: false, message: 'Please input your username!'}],
                                    })(
                                        <Input placeholder="创建人"/>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>


                        <Row>
                            <Form.Item>
                                <Col span={2} offset={10}>
                                    <Button type="primary" htmlType="submit">查询</Button>
                                </Col>
                                <Col span={2}>
                                    <Button type="primary" onClick={this.handleReset}>重置</Button>
                                </Col>
                            </Form.Item>
                        </Row>
                    </Form>
                </div>

                <Table dataSource={this.state.dataSource} columns={columns} bordered={true}
                       pagination={{
                           pageSize: this.state.pageSize,
                           total: this.state.total,
                           current: this.state.current,
                           onChange: this.handlePage
                       }}/>
            </div>
        );
    }
}


const WrappedUnpaidOrder = Form.create()(UnpaidOrderList);

export default class UnpaidOrder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <WrappedUnpaidOrder/>
            </div>
        )
    }
}

