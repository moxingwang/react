import React, {Component} from "react"
import {
    render as renderAmis
} from 'amis';


class QueryList extends Component {
    render() {
        return (
            <div>
            <p>通过 amis 渲染页面</p>
            {renderAmis(

                
                {
                    "$schema": "https://houtai.baidu.com/v2/schemas/page.json#",
                    "type": "page",
                    "body": {
                        "api": "/api/mock2/form/saveForm",
                        "type": "form",
                        "title": "联系我们",
                        "controls": [
                            {
                                "type": "text",
                                "label": "姓名",
                                "name": "name"
                            },
                
                            {
                                "type": "email",
                                "label": "邮箱",
                                "name": "email",
                                "required": true
                            },
                
                            {
                                "type": "textarea",
                                "label": "内容",
                                "name": "content",
                                "required": true
                            }
                        ],
                        "actions": [
                            {
                                "label": "发送",
                                "type": "submit",
                                "primary": true
                            }
                        ]
                    }
                },{},{
                    updateLocation: (location, replace) => {
                        // 用来更新地址栏
                    }, isCancel: function () {

                        return false;
                    },
                }


            )}
            </div>
        );
    }
}


export {QueryList}