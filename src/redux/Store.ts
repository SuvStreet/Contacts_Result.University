import { combineReducers } from 'redux'
import { contactsReducer } from './reducers/ContactsReducer'
import { groupContactsReducer } from './reducers/GroupContactsReducer'
import { favoriteContactsReducer } from './reducers/FavoriteContactsReducer'
import { thunk } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groupContacts: groupContactsReducer,
  favoriteContacts: favoriteContactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof rootReducer>
