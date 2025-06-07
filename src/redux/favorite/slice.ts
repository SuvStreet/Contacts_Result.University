import { createSlice } from '@reduxjs/toolkit';
import { DATA_CONTACT } from 'src/__data__'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'

const FAVORITE_CONTACTS: FavoriteContactsDto = [
  DATA_CONTACT[0].id,
  DATA_CONTACT[1].id,
  DATA_CONTACT[2].id,
  DATA_CONTACT[3].id,
]

export const favoriteSlice = createSlice ({
  name: 'favoriteContacts',
  initialState: FAVORITE_CONTACTS,
  reducers: {}
})
