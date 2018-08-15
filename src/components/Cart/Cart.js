import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
    render() {

        // map through the cart and display the image
        let mappedCart = this.props.cart.map( product => {
            return (
                <div key={product.id}>
                    <img className='product-img' src={product.image} />
                </div>
            )
        } )

        return (
            <div style={{minHeight: '100vh', width: '100%', background: '#a464ed'}}>
                <h1>{this.props.totalCost}</h1> {/* display the total cost of the cart from Redux */}
                {mappedCart}
            </div>
        )
    }
};

// This time, we do need both values from Redux
function mapStateToProps( state ) {
    const { cart, totalCost } = state;

    return {
        cart, totalCost
    };
};

// We don't need any actions here right now, only values off of state
export default connect( mapStateToProps )(Cart);