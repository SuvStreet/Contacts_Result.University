import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import { contactsReducer } from './reducers/ContactsReducer'
import { groupContactsReducer } from './reducers/GroupContactsReducer'
import { favoriteContactsReducer } from './reducers/FavoriteContactsReducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactsReducer,
  favoriteContacts: favoriteContactsReducer,
})

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
