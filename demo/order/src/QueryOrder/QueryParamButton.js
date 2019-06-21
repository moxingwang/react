import React, {Component} from "react";
import {Col, Input, Row, Select} from 'antd';
import 'antd/dist/antd.css';
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';

const FormItem = Form.Item;

const Search = Input.Search;
const Option = Select.Option;


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    }
};

class QueryParamButton extends Component {
    render() {
        return (
            <div>


                {
                    /*<div style={{display:"flex",columnCount: 3,columnGap: "20px"}}>
                        <div style={{margin:"20px",display:"flex",    alignItems:"center"}}>
                            <label style={{width:"40%"}}>销售单号：</label>
                            <Input type="text"/>
                        </div>

                        <div style={{margin:"20px",display:"flex",    alignItems:"center"}}>
                            <label style={{width:"40%"}}>销售单号：</label>
                            <Input type="text"/>
                        </div>

                        <div style={{margin:"20px",display:"flex",    alignItems:"center"}}>
                            <label style={{width:"40%"}}>销售单号：</label>
                            <Input type="text"/>
                        </div>
                    </div>*/
                }



                <div style={{margin: "30px", padding: "20px", border: "2px solid #CCC"}}>
                    <Row span={24}>

                        <Col span={6}>
                            <Form.Item  {...formItemLayout} label="销售单号">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item  {...formItemLayout} label="销售单号">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item  {...formItemLayout} label="销售单号">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item  {...formItemLayout} label="销售单号">
                                <Input/>
                            </Form.Item>
                        </Col>


                    </Row>

                    <Row>
                        <Col span={2} offset={10}>
                            <Button key="submit" type="primary">查询</Button>
                        </Col>
                        <Col span={2}>
                            <Button key="submit" type="primary">重置</Button>
                        </Col>
                    </Row>

                </div>


                <div style={{padding: "4px", height: "50px"}}>
                    {/*<Search
                        placeholder={this.props.placeholderName}
                        onSearch={value => console.log(value)}
                        enterButton
                    />*/}
                </div>
            </div>

        );
    }
}


export default QueryParamButton;