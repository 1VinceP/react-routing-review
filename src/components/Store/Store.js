import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // Importing connect to access Redux values in this component
import { addToCart } from '../../redux/reducer'; // Importing the action from the reducer
import axios from 'axios';

class Store extends Component {
    state = {
        products: []
    }

    // When the component mounts, get a list of all the products and save them to state
    componentDidMount() {
        axios.get( 'https://practiceapi.devmountain.com/products' )
            .then( response => {
                // console.log( response )
                this.setState({ products: response.data })
            } )
    }

    render() {
        // Map over the products and save them to be displayed as store items
        let products = this.state.products.map( (item, i) => {
            return (
                <div key={i}>
                    {/* Click on the image to be routed to the individual product's page */}
                    <Link to={`/product/${item.id}`}>
                        <img className='product-img' src={item.image} alt='image' />
                    </Link>
                    <div>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        {/* Click the button to add the item to your cart. addToCart is an action coming from redux, and being applied to props via connect */}
                        <button onClick={() => this.props.addToCart( item )}>Add to Cart</button>
                        <hr/>
                    </div>
                </div>
            )
        } )

        return (
            <div style={{width: '100%', minHeight: '100vh', background: '#ed8f64'}}>
                <h2>${this.props.totalCost}</h2> {/* Display the total value of the cart */}
                <h1>THIS IS THE STORE</h1>
                {products}
            </div>
        )
    }
}

// We must tell the component which properties we want off of the Redux state
// Even though there are two values (cart and totalCost), we only care about the totalCost right now
function mapStateToProps( state ) {
    const { totalCost } = state;

    return {
        totalCost
    };
};

// We pass mapStateToProps and addToCart to the Store via connect
// This allows us to access those things on this.props
export default connect( mapStateToProps, { addToCart } )(Store);