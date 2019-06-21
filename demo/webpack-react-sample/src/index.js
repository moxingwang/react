import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import SaleBillingFirst from '../src/components/test/AdvancedSearchForm';
import QueryOrder from '../src/components/QueryOrder/QueryOrder';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
    </div>
  );
}

ReactDOM.render(<QueryOrder />, document.getElementById('app'));
