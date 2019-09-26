import { combineReducers } from 'redux';
import loader from './loader';
import { deal, deals } from './deal';

const rootReducer = combineReducers({
  loader,
  deal,
  deals
});

export default rootReducer;
