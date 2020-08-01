import { createStore } from 'redux';
import reudcer from './reudcer';

export default createStore(
    reudcer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);