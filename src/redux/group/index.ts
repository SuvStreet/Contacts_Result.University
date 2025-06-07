import { groupContactsApiSlice } from './api'

const reducer = groupContactsApiSlice.reducer

export default reducer

export const { useGetGroupContactsQuery } = groupContactsApiSlice

export const groupContactsMiddleware = groupContactsApiSlice.middleware
export const groupContactsReducerPath = groupContactsApiSlice.reducerPath