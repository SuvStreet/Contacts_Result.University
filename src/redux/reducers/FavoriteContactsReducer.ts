import { DATA_CONTACT } from 'src/__data__'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'

const FAVORITE_CONTACTS: FavoriteContactsDto = [
  DATA_CONTACT[0].id,
  DATA_CONTACT[1].id,
  DATA_CONTACT[2].id,
  DATA_CONTACT[3].id,
]

export function favoriteContactsReducer(
  state = FAVORITE_CONTACTS,
  action: { type: any; payload: any }
) {
  switch (action.type) {

    default:
      return state
  }
}
