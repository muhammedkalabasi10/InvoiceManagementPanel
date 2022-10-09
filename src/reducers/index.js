import { combineReducers } from 'redux'

import invoices from './invoices'
import clients from './clients'
import auth from './auth'
import profiles from './profiles'
import products from './products'

export default combineReducers({ invoices, clients, products, auth, profiles })