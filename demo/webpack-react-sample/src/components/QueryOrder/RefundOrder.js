import React, {Component} from "react";
import QueryParamButton from './QueryParamButton'


class UnpaidOrder extends Component {
    render() {
        return (
            <div>
                <QueryParamButton placeholderName={"请输入退单号"}/>
            </div>
        );
    }
}


export default UnpaidOrder;