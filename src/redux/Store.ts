import { combineReducers, legacy_createStore as createStore } from 'redux'
import { contactsReducer } from './redusers/ContactsReducer'
import { groupContactsReducer } from './redusers/GroupContactsReducer'
import { favoriteContactsReducer } from './redusers/FavoriteContactsReducer'

export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    groupContacts: groupContactsReducer,
    favoriteContacts: favoriteContactsReducer,
  })
)

export type RootState = ReturnType<typeof store.getState>
