import { combineReducers, legacy_createStore as createStore } from 'redux'
import { contactsReducer } from './ContactsReducer'

export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
  })
)
