import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing components that will serve as routes
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';

export default (
    <Switch>

        {/* Setting up the routes */}
        {/* The path MUST match the "to" value of your link component */}
        <Route exact path='/' component={Home} />
        <Route path='/store' component={Store} />
        <Route path='/product/:alligator' component={Product} />
        <Route path='/cart' component={Cart} />

    </Switch>
)