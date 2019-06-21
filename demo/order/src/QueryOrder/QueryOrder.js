import React, {Component} from "react";
import OrderHeader from './OrderHeader'
import UnpaidOrder from './UnpaidOrder'
import PaidOrder from './PaidOrder'
import RefundOrder from './RefundOrder'

class QueryOrder extends Component {
    constructor(props) {
        super(props)
        this.state = ({itemKey: "unpaid"})
    }

    changeTables = (e) => {
        console.log(e.key)
        this.setState({itemKey: e.key})
    }

    render() {
        return (
            <div>
                <OrderHeader onClick={this.changeTables}/>
                <div>
                    {this.state.itemKey === 'unpaid' ? <UnpaidOrder/> : null}
                    {this.state.itemKey === 'paid' ? <PaidOrder/> : null}
                    {this.state.itemKey === 'refunded' ? <RefundOrder/> : null}
                </div>
            </div>
        );
    }
}


export default QueryOrder;