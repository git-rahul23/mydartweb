import { createStore } from 'redux';
import subReducer from './reducer/reducer';


const mystore = createStore(subReducer);

export default mystore;