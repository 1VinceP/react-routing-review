// We need to have an initial state
const initialState = {
    cart: [],
    totalCost: 0
}

// This is our type that connects our action to our reducer
const ADD_TO_CART = 'ADD_TO_CART'

// This is our reducer. It takes in state (either the updated state or the initial state) and whatever our actions return
export default function reducer( state = initialState, action ) {
    // switch statements can be tricky. Just keep in mind that we are linking reducer instructions to our action's data
    switch( action.type ) {
        // When the type is 'ADD_TO_CART'...
        case ADD_TO_CART:
            // ...destructure our payload...
            const { product, price } = action.payload
            // ...and return a brand new object that looks exactly like the old state
            // but with updated values
            return Object.assign( {}, state, {
                totalCost: state.totalCost += price, // add the price of the selected product to the current total
                cart: [...state.cart, product] // make a copy of the current cart, then add the new item to the end
            } )

        // If the action's type doesn't match a case, just return the state as it is
        default:
            return state;
    }
}

// This is our action. We need a parameter, product
export function addToCart( product ) {

    // The price is currently a string, so lets save it as a number
    let price = product.price * 1;

    // We need the type so the reducer knows what to do with the data we give it
    // Our payload contains the entire product, and the price that is now a number
    return {
        type: ADD_TO_CART,
        payload: { product, price }
    }
}