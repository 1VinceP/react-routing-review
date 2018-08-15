import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/reducer';
import axios from 'axios';

class Product extends Component {
    state = {
        product: {}
    }

    // Get the data for the specific item on the product page
    componentDidMount() {
        const { alligator } = this.props.match.params
        axios.get( `https://practiceapi.devmountain.com/products/${alligator}` )
            .then( response => {
                console.log( response.data )
                this.setState({ product: response.data })
            })
    }

    // Using react-router we able to create a method that takes us back to the previous page
    handleReverse() {
        this.props.history.goBack();
    }

    render() {
        const { image } = this.state.product

        console.log( this.props )

        return (
            <div style={{height: '100vh', width: '100%', background: '#64ed6b'}}>
                <button onClick={() => this.props.addToCart(this.state.product)}>Add to Cart</button>
                <button onClick={() => this.handleReverse()}>Back</button>
                <img src={image} />
            </div>
        )
    }
}

// Passing in null because we don't need any values from Redux's state
// We only care about the addToCart action
// Actions must be connect's second argument
export default connect( null, { addToCart } )(Product);