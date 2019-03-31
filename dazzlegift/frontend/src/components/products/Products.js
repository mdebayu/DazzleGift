import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from '../../actions/products';

export class Products extends Component {
	static propTypes = {	
		leads: PropTypes.array.isRequired
	};

	componentDidMount(){
		this.props.getProducts();
	}


	render() {
		return (
			<div>
				<h1> Products List </h1> 
			</div>
			);
	}

}

const mapStateToProps = state => ({
	products : state.products.products
	// state.products is the reducer 
	// we want the products property in the reducer
});


export default connect(mapStateToProps,{ getProducts })
(Products);