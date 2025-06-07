import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import favoriteSliceReducer from './favorite'
import contactsReducer, {
  contactsMiddleware,
  contactsReducerPath,
} from './contact'
import groupContactsReducer, {
  groupContactsMiddleware,
  groupContactsReducerPath,
} from './group'

const rootReducer = combineReducers({
  favoriteContacts: favoriteSliceReducer,
  [contactsReducerPath]: contactsReducer,
  [groupContactsReducerPath]: groupContactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      contactsMiddleware,
      groupContactsMiddleware,
    ]),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
