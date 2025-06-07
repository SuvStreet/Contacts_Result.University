import { contactsApiSlice } from './api'

const reducer = contactsApiSlice.reducer

export default reducer

export const { useGetContactsQuery } = contactsApiSlice

export const contactsMiddleware = contactsApiSlice.middleware
export const contactsReducerPath = contactsApiSlice.reducerPath