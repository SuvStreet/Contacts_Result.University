import { combineReducers, legacy_createStore as createStore } from 'redux'
import { contactsReducer } from './reduсers/ContactsReducer'
import { groupContactsReducer } from './reduсers/GroupContactsReducer'
import { favoriteContactsReducer } from './reduсers/FavoriteContactsReducer'

export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
    groupContacts: groupContactsReducer,
    favoriteContacts: favoriteContactsReducer,
  })
)

export type RootState = ReturnType<typeof store.getState>
