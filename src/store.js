import { createStore } from 'redux';
import reducer from './redux/reducer';

// We must pass our reducer to createStore
// The second argument here allows us to connect our app to Redux Devtools
export default createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );