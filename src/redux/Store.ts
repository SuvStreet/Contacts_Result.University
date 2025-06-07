import { combineReducers } from 'redux'
import { contactsApiSlice } from './reducers/ContactsReducer'
import { groupContactsApiSlice } from './reducers/GroupContactsReducer'
import { favoriteSlice } from './reducers/FavoriteContactsReducer'

import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  favoriteContacts: favoriteSlice.reducer,
  [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
  [groupContactsApiSlice.reducerPath]: groupContactsApiSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      contactsApiSlice.middleware,
      groupContactsApiSlice.middleware,
    ]),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
