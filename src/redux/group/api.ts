import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const groupContactsApiSlice = createApi({
  reducerPath: 'groupContactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/0/h',
  }),
  endpoints(builder) {
    return {
      getGroupContacts: builder.query<GroupContactsDto[], void>({
        query: () => ({ url: '/f1e98b0d70d16a909818b03b72415733.json' }),
      }),
    }
  },
})
