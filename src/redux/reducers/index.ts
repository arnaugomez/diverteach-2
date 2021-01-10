import {combineReducers} from 'redux'
import widgetListReducer from './widgetListReducer'

export default combineReducers({widgetList: widgetListReducer})