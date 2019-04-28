import React, {Component, Fragment} from 'react';
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
			<Fragment>
				<h2> Products </h2>
				<table className = "table tabled-striped"> 
					<thead>
						<tr>
							<th> ID </th>
							<th> Name </th>
							<th> Email </th>
							<th> Message </th>
							<th /> 
						</tr>
					</thead>
					<tbody>
						{this.props.products.map(product => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.email}</td>
								<td>{product.message}</td>
								<td><button className = "btn btn-danger btn-sm">Delete</button></td>
							</tr>
						))
					}
					</tbody>
					
				</table> 
			</Fragment>
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