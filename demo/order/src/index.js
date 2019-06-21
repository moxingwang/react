import React from 'react';
import ReactDOM from 'react-dom';
import AntdTest from './components/AntdTest';
import NumberList from './components/NumberList';
import AppRouterMain from './router/AppRouterIndex';
import NestedRouting from './router/NestedRouting';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FetchRequestTable from './fetch/FetchRequestTable';
import QueryOrder from './QueryOrder/QueryOrder';
import SaleBillingFirst from './QueryOrder/AdvancedSearchForm';



// ReactDOM.render(<SaleBillingFirst/>, document.getElementById('root'));
ReactDOM.render(<QueryOrder/>, document.getElementById('root'));
