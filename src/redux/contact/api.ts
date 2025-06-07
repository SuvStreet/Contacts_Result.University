import { ContactDto } from 'src/types/dto/ContactDto'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/385/h',
  }),
  endpoints(builder) {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () => ({
          url: '/0afc05779dcbbebd7055a1d87b8c7c6b.json',
        }),
      }),
    }
  },
})
